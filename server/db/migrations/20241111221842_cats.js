/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('cats', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('rank')
    table.integer('moons')
    table.integer('clan_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('cats')
}
