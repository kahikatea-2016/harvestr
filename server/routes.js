var db = require('./db')

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  updateTicket: updateTicket,
  updateComment: updateComment,
  getTickets: getTickets,
  addTicket: addTicket,
  getDonorTicket: getDonorTicket,
  getRecipientTicket: getRecipientTicket
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

function getDonor(req, res) {
  var donorId = req.params.id
  db.getDonor(donorId)
    .then(function (donor) {
      res.json(donor)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getRecipient(req, res) {
  var recipientId = req.params.id
  db.getRecipient(recipientId)
    .then(function (recipient) {
      res.json(recipient)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function updateTicket(req, res) {
  var ticket = {
    id: req.body.ticketId,
    actualKg: req.body.actualKg,
  }
  db.updateTicket(ticket)
    .then(function () {
      res.json(ticket)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function updateComment(req, res) {
  var comment = {
    ticketId: req.body.ticketId,
    comment: req.body.comment
  }
  db.updateComment(comment)
    .then(function () {
      res.json(comment)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

// "has to match table column name, use _": req.body.useCamelCase
function addTicket(req, res) {
  var ticket = {
    expected_kg: req.body.expectedKg,
    recipient_id: req.body.recipientId,
    donor_id: req.body.donorId,
    is_complete: 0
  }
  db.addTicket(ticket)
    .then(function () {
      res.json(ticket)
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

function getDonorTicket(req, res) {
  var ticketId = req.params.id
  db.getDonorTicket(ticketId)
    .then(function (donorTicket) {
      var ticket = []
      var foundComments = []
      for (var i = 0; i < donorTicket.length; i++) {
        if(!donorTicket[i].comments) {
          ticket.push(donorTicket[i])
        }
      }

      for (var i = 0; i < donorTicket.length; i++) {
        if (!foundComments.includes(donorTicket[i].comments)) {
          ticket.push({
            comments: donorTicket[i].comments
          })
          foundComments.push(donorTicket[i].comments)
        }
      }
      console.log(ticket)
      res.json(donorTicket)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getRecipientTicket(req, res) {
  var ticketId = req.params.id
  db.getRecipientTicket(ticketId)
    .then(function (recipientTicket) {
      res.json(recipientTicket)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}
