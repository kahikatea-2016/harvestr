exports.up = function (knex, Promise) {
  return knex.schema.createTable('ticker-notes', table => {
    table.increments('id').primary()
    table.string('notes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ticker-notes')
}
