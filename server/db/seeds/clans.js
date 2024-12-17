/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('clans').del()
  await knex('clans').insert([
    { id: 1, name: 'Thunderclan', leader_id: 1, deputy_id: 2, medcat_id: 3 },
    { id: 2, name: 'Shadowclan', leader_id: 4, deputy_id: 5, medcat_id: 6 },
    { id: 3, name: 'Riverclan', leader_id: 7, deputy_id: 8, medcat_id: 9 },
    { id: 4, name: 'Windclan', leader_id: 10, deputy_id: 11, medcat_id: 12 },
  ])
}
