var config = require('../knexfile')[process.env.NODE_ENV]
var knex = require('knex')(config)

module.exports = {
  getDetailByAddress: getDetailByAddress,
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient,
  updateTicket: updateTicket,
  updateComment: updateComment,
  getTickets: getTickets,
  addTicket: addTicket,
  getDonorTicket: getDonorTicket,
  getRecipientTicket: getRecipientTicket,
  getTicketComments: getTicketComments,
  createDonorProfile: createDonorProfile,
  createDonor: createDonor,
  createRecipientProfile: createRecipientProfile,
  createRecipient: createRecipient
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
  .select('donors.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes', 'donors.detail_id as detailId')
}

function getRecipient (id) {
  return knex('recipients')
  .join('details', 'recipients.detail_id', '=', 'details.id')
  .where('recipients.id', id)
  .select('recipients.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes', 'recipients.detail_id as detailId')
}

function updateTicket (ticket) {
  return knex ('tickets')
 .where('tickets.id', ticket.id)
 .update({
   actual_kg: ticket.actualKg,
   is_complete: true
 })
}

function updateComment (comment) {
  return knex ('comments')
  .insert({
    ticket_id: comment.ticketId,
    comments: comment.comment
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
    .select('tickets.id as ticketId', 'donors.name as donorName', 'donors.id as donorId', 'recipients.name as recipientName', 'recipients.id as recipientId', 'expected_kg as expectedKg', 'actual_kg as actualKg', 'details.address as address', 'is_complete as isComplete')
  }

function addTicket (ticket) {
  return knex('tickets').insert(ticket)
}

function getDetailByAddress (address)
{
  return knex('details')
    .select('id')
    .where('address', '=', address)
}

function getDonorTicket (ticketId) {
  return knex ('tickets')
 .join ('donors', 'tickets.donor_id', '=', 'donors.id')
 .join ('details', 'tickets.details_id', '=', 'details.id')
 .where ('tickets.id', ticketId)
 .select ('tickets.id as id', 'tickets.expected_kg as expected', 'tickets.actual_kg as actual', 'donors.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes', 'tickets.is_complete as isComplete')
}

function getRecipientTicket (ticketId) {
  return knex ('tickets')
  .join ('recipients', 'tickets.recipient_id', '=', 'recipients.id')
  .join ('details', 'tickets.details_id', '=', 'details.id')
  .where ('tickets.id', ticketId)
  .select ('tickets.id as id', 'tickets.expected_kg as expected', 'tickets.actual_kg as actual', 'recipients.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes', 'tickets.is_complete as isComplete')
}

function getTicketComments (ticketId) {
  return knex ('comments')
  .where ('ticket_id', ticketId)
  .select()
}

function createDonorProfile (donor) {
  return knex('details')
    .insert({
      address: donor.address,
      contact_person: donor.contactPerson,
      phone: donor.phone,
      notes: donor.notes
    })
}

function createDonor (name, detailId) {
  return knex('donors')
    .insert({
      name: name,
      detail_id: detailId
    })
    .catch(console.error)
}

function createRecipientProfile (recipient) {
  return knex('details')
    .insert({
      address: recipient.address,
      contact_person: recipient.contactPerson,
      phone: recipient.phone,
      notes: recipient.notes
    })
}

function createRecipient (name, detailId) {
  return knex('recipients')
    .insert({
      name: name,
      detail_id: detailId
    })
}
