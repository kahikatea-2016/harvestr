var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
var verifyJwt = require('express-jwt')

var auth = require('./lib/auth')
var users = require('./lib/users')
var routes = require('./routes')

var PORT = process.env.PORT || 3000
var app = express()

app.set('JWT_SECRET', 'THIS IS NOT A VERY SECRET VALUE! CHANGE IT IN PRODUCTION PLEASE!')
app.use(passport.initialize())
passport.use(new GoogleStrategy(auth.googleConfig, auth.verify))

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/auth/google', passport.authenticate('google', { session: false, scope: ['email'] }))
app.get('/auth/google/callback', auth.issueJwt)
app.get('/auth/logout', (req, res) => {
  res.clearCookie('token', { path: '/' })
  res.redirect('/')
})

// express-jwt middleware lets us use a function as the secret,
// so we can grab it out of app settings
function getSecret (req, payload, done) {
  done(null, req.app.get('JWT_SECRET'))
}

// Protect all routes beneath this point
app.use(
  verifyJwt({
    getToken: auth.getTokenFromCookie,
    secret: getSecret
  }),
  auth.handleError
)


app.use(
  users.requiresDriver,
  auth.handleError
)

app.get('/v1/donors', routes.getDonors)
app.get('/v1/recipients', routes.getRecipients)
app.get('/v1/donors/:id', routes.getDonor)
app.get('/v1/recipients/:id', routes.getRecipient)
app.get('/v1/tickets', routes.getTickets)
app.get('/v1/tickets/donors/:id', routes.getDonorTicket)
app.get('/v1/tickets/recipients/:id', routes.getRecipientTicket)
app.get('/v1/tickets/comments/:id', routes.getTicketComments)
app.get('/v1/donor/:id', routes.getDonor)

app.put('/v1/tickets', routes.updateTicket)
app.put('/v1/comments', routes.updateComment)

app.use(
  users.requiresAdmin,
  auth.handleError
)

app.post('/v1/createDonor', routes.createDonor)
app.post('/v1/createRecipient', routes.createRecipient)
app.post('/v1/tickets', routes.addTicket)


app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
