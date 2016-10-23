exports.up = function (knex, Promise) {
  return knex.schema.table('tickets', table => {
    table.dropColumn('comment_id')
  })
}

exports.down = function (knex, Promise) {
}
