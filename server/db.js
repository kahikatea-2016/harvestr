var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  getDonorTicketList: getDonorTicketList,
  getRecipientTicketList: getRecipientTicketList,
  updateTicket: updateTicket,
  updateComment: updateComment
}

// gets list of all donors
function getDonors () {
  return knex('donors').select()
}

// gets list of all recipients
function getRecipients () {
  return knex('recipients').select()
}

//gets details of donors
function getDonor (id) {
  return knex('donors')
  .join('details', 'donors.detail_id', '=', 'details.id')
  .where('donors.id', id)
  .select('donors.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes')
}

//gets details of recipients
function getRecipient (id) {
  return knex('recipients')
  .join('details', 'recipients.detail_id', '=', 'details.id')
  .where('recipients.id', id)
  .select('recipients.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes')
}

//gets ALL the donors tickets for pick up
function getDonorTicketList (id) {
 return knex ('tickets')
 .join ('donors', 'tickets.donor_id', '=', 'donors.id')
 .join ('details', 'tickets.details_id', '=', 'details.id')
 .where ('tickets.id', id)
 .select ('tickets.expected_kg as expected', 'donors.name as name', 'details.address as address')
}

//gets ALL the recipients tickets for drop off
function getRecipientTicketList (id) {
  return knex ('tickets')
  .join ('recipients', 'tickets.recipient_id', '=', 'recipients.id')
  .join ('details', 'tickets.details_id', '=', 'details.id')
  .where ('tickets.id', id)
  .select ('tickets.expected_kg as expected', 'recipients.name as name', 'details.address as address')
}

//Ops updates ticket
function updateTicket (id, ticket) {
  return knex ('tickets')
 .where('tickets.id', id)
 .update({
   expected_kg: ticket.expectedKg,
   is_complete: ticket.done
 })
}

//driver updates comments
function updateComment (id, comment) {
  return knex ('comments')
  .where('ticket_id', id)
  .update({
    comments: comment.comments
  })
}

//Ops adds a new pick up or drop off ticket
function createDonorTicket (id, ticket) {
  return knex ('tickets')
  .join ('donors', 'tickets.donor_id', '=', 'donors.id')
  .where('donors.id', id)
  .select('donors.donor_id as donorId', 'tickets.expected_kg as expectedKg', 'tickets.is_complete as done')
  .insert({
    donor_id: ticket.donorId,
    expected_kg: ticket.expectedKg,
    is_complete: ticket.done
  })
}

function createRecipientTicket (id, ticket) {
  return knex ('tickets')
  .join ('recipients', 'tickets.recipient_id', '=', 'recipients.id')
  .where('recipients.id', id)
  .select('recipients.recipient_id as recipientId', 'tickets.expected_kg as expectedKg', 'tickets.is_complete as done')
  .insert({
    recipient_id: ticket.recipientId,
    expected_kg: ticket.expectedKg,
    is_complete: ticket.done
  })
}
