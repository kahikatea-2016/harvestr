exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('email')
    table.string('google_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
