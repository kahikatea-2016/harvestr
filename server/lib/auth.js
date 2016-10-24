const jwt = require('jsonwebtoken')
const passport = require('passport')

const googleConfig = {
  consumerKey: process.env.TWITTER_KEY,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: 'http://localhost:3000/api/auth/twitter/callback'
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
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
  passport.authenticate('twitter', (err, user, info) => {
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

function verify (token, tokenSecret, profile, done) {
  users.getByTwitter(profile.id)
    .then(userList => {
      if (userList.length === 0) {
        users.create(profile.username, profile.id)
          .then(() => {
            return done(null, {
              id: profile.id,
              username: profile.username
            })
          })
          .catch(err => done(err, false, { message: "Couldn't add user due to a server error." }))
      }

      const user = userList[0]
      done(null, {
        id: user.id,
        username: user.username
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
  twitterConfig: twitterConfig,
  verify: verify
}
