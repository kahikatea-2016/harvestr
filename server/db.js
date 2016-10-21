var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  getDonorTicketList: getDonorTicketList,
  getRecipientTicketList: getRecipientTicketList,
  addTicket: addTicket,
  updateTicket: updateTicket,
  updateComment: updateComment,
  getTickets: getTickets
}

function getDonors () {
  return knex('donors').select()
}

function getRecipients () {
  return knex('recipients').select()
}

function getDonor (id) {
  return knex('donors')
  .join('details', 'donors.detail_id', '=', 'details.id')
  .where('donors.id', id)
  .select('donors.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes')
}

function getRecipient (id) {
  return knex('recipients')
  .join('details', 'recipients.detail_id', '=', 'details.id')
  .where('recipients.id', id)
  .select('recipients.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes')
}

function getDonorTicketList (id) {
 return knex ('tickets')
 .join ('donors', 'tickets.donor_id', '=', 'donors.id')
 .join ('details', 'tickets.details_id', '=', 'details.id')
 .where ('tickets.id', id)
 .select ('tickets.expected_kg as expected', 'donors.name as name', 'details.address as address')
}

function getRecipientTicketList (id) {
  return knex ('tickets')
  .join ('recipients', 'tickets.recipient_id', '=', 'recipients.id')
  .join ('details', 'tickets.details_id', '=', 'details.id')
  .where ('tickets.id', id)
  .select ('tickets.expected_kg as expected', 'recipients.name as name', 'details.address as address')
}

function addTicket (ticket) {
  return console.log('added ticket')
}

function updateTicket (ticket) {
  return knex ('tickets')
 .where('tickets.id', tickets.id)
 .update({
   expected_kg: ticket.expectedKg,
   is_complete: ticket.done
 })
}

function updateComment (comment) {
  return knex ('comments')
  .where('ticket_id', comment.ticketId)
  .update({
    comments: comment.comments
  })
}

function getTickets () {
  return knex('tickets')
    .leftJoin('donors', 'tickets.donor_id', 'donors.id')
    .leftJoin('recipients', 'tickets.recipient_id', 'recipients.id')
    .leftJoin('details', function () {
      this
        .on('details.id', '=', 'donors.detail_id')
        .orOn('details.id', '=', 'recipients.detail_id')
    })
    .select('donors.name as donorName', 'donors.id as donorId', 'recipients.name as recipientName', 'recipients.id as recipientId', 'expected_kg as expectedKg', 'details.address as address', 'is_complete as isComplete')
}
