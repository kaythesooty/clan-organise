/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cats').del()
  await knex('cats').insert([
    { id: 1, name: 'Firestar', rank: 'Leader', moons: 69, clan_id: 1 },
    { id: 2, name: 'Brambleclaw', rank: 'Deputy', moons: 47, clan_id: 1 },
    { id: 3, name: 'Jayfeather', rank: 'Medicine Cat', moons: 22, clan_id: 1 },
    { id: 4, name: 'Blackstar', rank: 'Leader', moons: 118, clan_id: 2 },
    { id: 5, name: 'Rowanclaw', rank: 'Deputy', moons: 81, clan_id: 2 },
    { id: 6, name: 'Littlecloud', rank: 'Medicine Cat', moons: 73, clan_id: 2 },
    { id: 7, name: 'Mistystar', rank: 'Leader', moons: 91, clan_id: 3 },
    { id: 8, name: 'Splashfleck', rank: 'Deputy', moons: 52, clan_id: 3 },
    { id: 9, name: 'Mothwing', rank: 'Medicine Cat', moons: 78, clan_id: 3 },
    { id: 10, name: 'Onestar', rank: 'Leader', moons: 54, clan_id: 4 },
    { id: 11, name: 'Mistfur', rank: 'Deputy', moons: 88, clan_id: 4 },
    {
      id: 12,
      name: 'Kestrelflight',
      rank: 'Medicine Cat',
      moons: 37,
      clan_id: 4,
    },
  ])
}
