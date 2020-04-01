
exports.up = function(knex) {
  return knex.schema.createTable('tarefas', function(table) {
    table.increments();
    table.string('atividade').notNullable();
    table.string('description').notNullable();
    table.string('tempo');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tarefas');
};
