exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('donors', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('detail_id')
  }),
  knex.schema.createTable('recipients', function(table){
    table.increments('id').primary()
    table.string('name')
    table.integer('detail_id')
  }),
  knex.schema.createTable('details', function(table){
    table.increments('id').primary()
    table.string('address')
    table.string('contact_person')
    table.integer('phone')
    table.string('notes')
  }),
  knex.schema.createTable('tickets', function(table){
    table.integer('expected_kg')
    table.integer('actual_kg')
    table.integer('recipient_id').references('recipients.id')
    table.integer('donor_id').references('donors.id')
    table.string('comments')
    table.boolean('is_complete')
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('donors'),
    knex.schema.dropTable('recipients'),
    knex.schema.dropTable('details'),
    knex.schema.dropTable('tickets')
  ])
};
