var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var routes = require('./routes')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/v1/donors', routes.getDonors)
app.get('/v1/recipients', routes.getRecipients)
app.get('/v1/donors/:id', routes.getDonor)
app.get('/v1/recipients/:id', routes.getRecipient)
app.get('/v1/tickets', routes.getTickets)
app.get('/v1/tickets/donors/:id', routes.getDonorTicket)
app.get('/v1/tickets/recipients/:id', routes.getRecipientTicket)

app.put('/v1/update-ticket', routes.updateTicket)
app.put('/v1/comments', routes.updateComment)
app.post('/v1/tickets', routes.addTicket)


app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
