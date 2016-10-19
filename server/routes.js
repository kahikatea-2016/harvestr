var db = require('/.db')

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getTickets: getTickets,
  getTicket: getTicket,
  addTicket: addTicket,
  updateTicket: updateTicket
}

function getDonors(req, res) {
  db.getDonors()
    .then(function (donors) {
      res.json(donors)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getRecipients(req, res) {
  db.getRecipients()
    .then(function (recipients) {
      res.json(recipients)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
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

function addTicket(req, res) {
  var ticket = {
    recipId: req.body.recipId,
    donorId: req.body.donorId,
    expectedKg: req.body.expectedKg,
    isComplete: false
  }
  db.addTicket(ticket)
    .then(function () {
      res.json(ticket)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function updateTicket(req, res) {
  var ticket = {
    recipId: req.body.recipId,
    donorId: req.body.donorId,
    actualKg: req.body.actualKg,
    comments: req.body.comments,
    isComplete: req.body.isComplete
  }
  db.updateTicket(ticket) {
    .then(function () {
        res.send(ticket)
      })
      .catch(function (err) {
        res.send(err.message).status(500)
      })
  }
}
