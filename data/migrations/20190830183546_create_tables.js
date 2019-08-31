
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('project_name').notNullable().unique();
    tbl.string('description');
    tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('resource_name').notNullable().unique();
    tbl.string('description');
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('description').notNullable();
    tbl.string('notes');
    tbl.boolean('completed').notNullable().defaultTo(false);
    tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
  })
  .createTable('project_resource', tbl => {
    tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
    tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources');
    tbl.primary(['project_id', 'resource_id']);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
