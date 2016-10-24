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
  // Check for existing user by Google ID
  users.getByGoogle(profile.id)
    .then(userList => {
      // If user does not exist...
      if (userList.length === 0) {
        // Create the user
        // TODO: code here to check if user email is on the approved list?
        return users.create(profile.id, profile.emails[0].value)
          .then(() => {
            // SQLlite doesn't support returning created id, so we need to go get it
            return users.getByGoogle(profile.id)
              .then(createdUser => {
                return done(null, {
                  id: createdUser[0].id,
                  email: createdUser[0].email
                })
              })
          })
          .catch(err => done(err, false, { message: "Couldn't add user due to a server error." }))
      } else {
        const user = userList[0]
        done(null, {
          id: user.id,
          email: user.email
        })
      }
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
