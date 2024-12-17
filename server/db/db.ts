import { Cat, CatData, Clan, ClanData, Loner } from '../../models/cats'
import db from './connection'

export async function getAllCats() {
  const cats = await db('cats').select(
    'id',
    'name',
    'rank',
    'moons',
    'clan_id as clanId',
  )
  // console.log("All cats", cats)
  return cats as Cat[]
}

export async function getClans() {
  const clanList = await db('clans').select('*')
  return clanList
}

export async function getCatById(id: number) {
  const cat = await db('cats').where({ id }).first()
  console.log(id, cat)
  return cat
}

export async function getCatsByClan(clan: string) {
  const clans = await db('clans').select('name')
  const clanList: string[] = clans.map((cln) => cln.name.toLowerCase())
  // console.log(clanList.indexOf(clan))
  const cats = await db('cats')
    .where('clan_id', clanList.indexOf(clan) + 1)
    .select('id', 'name', 'rank', 'moons', 'clan_id as clanId')
  console.log('cats in ' + clan, cats)
  return cats as Cat[]
}

export async function getCatsByRank(rank: string) {
  rank = rank[0].toUpperCase() + rank.slice(1)
  console.log(rank)
  const cat = await db('cats')
    .where('rank', rank)
    .select('id', 'name', 'rank', 'moons', 'clan_id as clanId')
  return cat as Cat[]
}

export interface AddProps {
  name: string
  rank: string
  moons: number
  clan: string
}

export async function addCat({ name, rank, moons, clan }: AddProps) {
  const clans = await db('clans').select('name')
  const clanList: string[] = clans.map((cln) => cln.name.toLowerCase())
  const newCat = { name, rank, moons, clan_id: clanList.indexOf(clan) + 1 }
  const result = await db('cats').insert(newCat)
  return result as number[]
}

export async function updateCat({ id, name, rank, moons, clanId }: Cat) {
  const result = await db('cats')
    .update({ name, rank, moons, clan_id: clanId })
    .where({ id })
  return result as number
}

export async function removeCatById(id: number) {
  const result = await db('cats').where({ id }).delete()
  return result as number
}
