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
// app.get('/v1/tickets', routes.getTickets)
app.get('/v1/tickets/:id', routes.getTicket)
// app.post('/v1/tickets', routes.addTicket)
// app.put('/v1/tickets', routes.updateTicket)


app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
