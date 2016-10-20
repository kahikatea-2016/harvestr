exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', table => {
    table.dropColumn('comments')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', table => {
    table.dropColumn('comments')
  })
};
