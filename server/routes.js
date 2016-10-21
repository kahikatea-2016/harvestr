var db = require('./db')

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  getDonorTicketList: getDonorTicketList,
  getRecipientTicketList: getRecipientTicketList,
  addTicket: addTicket,
  updateTicket: updateTicket,
  updateComment: updateComment
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

function getDonorTicketList(req, res) {
  var ticketId = req.params.id
  db.getDonorTicketList(ticketId)
    .then(function (donorTicket) {
      res.json(donorTicket)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getRecipientTicketList(req, res) {
  var ticketId = req.params.id
  db.getRecipientTicketList(ticketId)
    .then(function (recipientTicket) {
      res.json(recipientTicket)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
  }

  function updateTicket(req, res) {
    var ticket = {
      id: req.body.recipId,
      expectedKg: req.body.expectedKg,
      isComplete: req.body.done
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
      comments: req.body.comments
    }
    db.updateComment(comment)
      .then(function () {
        res.json(comment)
      })
      .catch(function (err) {
        res.send(err.message).status(500)
      })
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
