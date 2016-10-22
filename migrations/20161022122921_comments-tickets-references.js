
exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', table => {
    table.integer('comment_id').references('comments.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', table => {
    table.dropColumn('comment_id')
  })
};
