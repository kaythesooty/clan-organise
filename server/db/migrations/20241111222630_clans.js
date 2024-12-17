/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('clans', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.integer('leader_id')
    table.integer('deputy_id')
    table.integer('medcat_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('clans')
}
