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
  updateTicket: updateTicket
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

function addDonorTicket (id) {
  return knex ('ticket')
  .join ('donors', 'tickets.donor_id', '=', 'donors.id')
  .join ('details', 'tickets.details_id', '=', 'details.id')
  .join ('tickets.id', id)
  .select ('donors.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', )
}

function updateTicket (id, ticket) {
  return knex ('tickets')
 .where('tickets.id', id)
 .update({
   expected_kg: ticket.expectedKg,
   is_complete: ticket.done
 })
}

function updateComment (id, comment) {
  return knex ('comments')
  .where('ticket_id', id)
  .update({
    comments: comment.comments  
  })
}
