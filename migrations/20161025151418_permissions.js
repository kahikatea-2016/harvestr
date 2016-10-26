exports.up = function(knex, Promise) {
  return knex.schema.createTable('permissions', table => {
    table.increments('id').primary()
    table.string('level')
    table.integer('user_id').references('users.id').onUpdate('CASCADE').onDelete('RESTRICT')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('permissions')
};
