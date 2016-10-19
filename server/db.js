var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients
}

function getDonors () {
  return knex('donors').select()
}

function getRecipients () {
  return knex('recipients').select()
}

function getTickets () {
  return knex('tickets')
  .join('recipients', 'recipients_id', '=', 'recipients.id')
  .join('donors', 'donor_id', '=', 'donor.id')
  .join('details', 'detail_id', '=', 'details.id' )
  .select('details.id as detailsID')
}

function getTicket () {
  return knex('ticket')
  .insert({

  })
}
