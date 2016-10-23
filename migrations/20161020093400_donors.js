exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('donors', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('detail_id').references('details.id')
  }),
  knex.schema.createTable('recipients', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('detail_id').references('details.id')
  }),
  knex.schema.createTable('details', function(table) {
    table.increments('id').primary()
    table.string('address')
    table.string('contact_person')
    table.string('phone')
    table.string('notes')
  }),
  knex.schema.createTable('tickets', function(table) {
    table.increments('id').primary()
    table.integer('expected_kg')
    table.integer('actual_kg')
    table.integer('donor_id').references('donors.id')
    table.integer('recipient_id').references('recipients.id')
    table.integer('details_id').references('details.id')
    table.string('comments')
    table.boolean('is_complete')
  }),
  knex.schema.createTable('comments', function(table) {
    table.increments('id').primary()
    table.integer('ticket_id').references('tickets.id')
    table.string('comments')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('donors'),
    knex.schema.dropTable('recipients'),
    knex.schema.dropTable('details'),
    knex.schema.dropTable('tickets'),
    knex.schema.dropTable('comments')
  ])
}
