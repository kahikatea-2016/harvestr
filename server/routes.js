var db = require('/.db')

module.exports = {
  getTickets: getTickets,
  getTicket: getTicket,
  addTicket: addTicket
}

function getTickets (req, res) {
  db.getTickets()
    .then(function (tickets) {
      res.json(tickets)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getTicket (req, res) {
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

function addTicket (req, res) {
  ticket = {
    recipId: req.body.recipId,
    donorId: req.body.donorId,
    expectedKg: req.body.expectedKg,
    actualKg: req.body.actualKg,
    isComplete: req.body.isComplete
  }
  db.addTicket(ticket)
  .then(function () {
    res.json(project)
  })
  .catch(function (err) {
    res.send(err.message).status(500)
  })
}
