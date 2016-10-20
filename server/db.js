var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  getDonors: getDonors,
  getRecipients: getRecipients,
  getDonor: getDonor,
  getRecipient: getRecipient
}

function getDonors () {
  return knex('donors').select()
}

function getRecipients () {
  return knex('recipients').select()
}

function getDonor (id) {
  return knex('donors')
    .join('details', 'donors.details_id', '=', 'details.id')
    .where('donors.id', id)
    .select('donors.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes')
  }

  function getRecipient (id) {
    return knex('recipients')
    .join('details', 'recipients.details_id', '=', 'details.id')
    .where('recipients.id', id)
    .select('recipients.name as name', 'details.address as address', 'details.contact_person as contact', 'details.phone as phone', 'details.notes as notes')
  }





    // SELECT * FROM donors
    // JOIN details ON donors.detail_id = details.id
    // WHERE donors.id = 1
