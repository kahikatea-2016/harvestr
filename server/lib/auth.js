const jwt = require('jsonwebtoken')
const passport = require('passport')
const dotenv = require('dotenv')
dotenv.load()

const users = require('./users')

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}

module.exports = {
  getTokenFromCookie: getTokenFromCookie,
  handleError: handleError,
  issueJwt: issueJwt,
  googleConfig: googleConfig,
  verify: verify,
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    email: user.email,
    level: user.level
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function getTokenFromCookie (req) {
  if (req.cookies.token) {
    return req.cookies.token
  }
  return null
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

function issueJwt (req, res, next) {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      return res.redirect('/')
    }

    if (!user) {
      return res.redirect('/')
    }

    const token = createToken(user, req.app.get('JWT_SECRET'))
    // Ideally use `secure: true` in production
    res.cookie('token', token, { httpOnly: true })

    // Temporarily redirect users with level null back to index
    res.redirect(user.level ? '/#/list' : '/')
  })(req, res, next)
}

function createUser (profile) {
  return users.create(profile.id, profile.emails[0].value)
    // Sadly, SQLite won't return the ID of the created record, so...
    .then(() => users.getByGoogle(profile.id))
    .then(createdUser => {
      if (createdUser.length) {
        return {
          id: createdUser[0].id,
          email: createdUser[0].email,
          level: createdUser[0].level
        }
      }
      return Promise.reject(new Error(`Can't find new user in database.`))
    })
    .catch(err => {
      return Promise.reject(new Error(`Couldn't add user due to a server error: ${err.message}`))
    })
}

function verify (token, refreshToken, profile, done) {
  users.getByGoogle(profile.id)
    .then((userList) => userList[0] || createUser(profile))
    .then(user => done(null, user))
    .catch(err => {
      done(err, false, { message: "Couldn't check your credentials with the database." })
    })
}
