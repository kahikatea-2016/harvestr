var db = require('/.db')

module.exports = {
  getTickets: getTickets,
  getTicket: getTicket
}

function getTickets(req, res) {
  db.getTickets()
    .then(function (tickets) {
      res.json(tickets)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getTicket(req, res) {
  var ticketId = Number(req.params.id)
  if (isNaN(ticketId)) {
    res.send('invalid id').status(404)
  } else {
    db.getTicket(ticketId)
      .then(function (ticket) {
        res.json(ticket)
      })
      .catch(function (err) {
        res.send(err.message).status(500)
      })
  }
}
