exports.up = function(knex, Promise) {
  return knex.schema.table('comments', table => {
    table.timestamp('created')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', table => {
    table.dropColumn('created')
  })
};
