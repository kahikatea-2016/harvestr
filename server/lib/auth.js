const jwt = require('jsonwebtoken')
const passport = require('passport')

const users = require('./users')

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    email: user.email
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
      return res.status(500).json({
        message: 'Authentication failed due to a server error.',
        info: err.message
      })
    }

    if (!user) {
      return res.json({
        message: 'Authentication failed.',
        info: info.message
      })
    }

    const token = createToken(user, req.app.get('JWT_SECRET'))
    // Ideally use `secure: true` in production
    res.cookie('token', token, { httpOnly: true })
    res.redirect('/')
  })(req, res, next)
}

function verify (token, refreshToken, profile, done) {
  users.getByGoogle(profile.id)
    .then(userList => {
      if (userList.length === 0) {
        users.create(profile.id, profile.emails[0].value)
          .then(() => {
            return done(null, {
              id: profile.id,
              email: profile.emails[0].value
            })
          })
          .catch(err => done(err, false, { message: "Couldn't add user due to a server error." }))
      }

      const user = userList[0]
      done(null, {
        id: user.id,
        email: user.email
      })
    })
    .catch(err => {
      done(err, false, { message: "Couldn't check your credentials with the database." })
    })
}

module.exports = {
  getTokenFromCookie: getTokenFromCookie,
  handleError: handleError,
  issueJwt: issueJwt,
  googleConfig: googleConfig,
  verify: verify,
}
