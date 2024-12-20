import request from 'superagent'
import { Cat, Clan, Loner } from '../../models/cats'

// CREATE FUNCTIONS

export async function addCat(cat: Loner, clan: string) {
  const result = await request.post(`/api/v1/clans/${clan}`).send(cat)
  return result.body as Cat
}

// READ FUNCTIONS

export async function getAllCats() {
  const result = await request.get('/api/v1/cats/')
  // console.log(result)
  return result.body as Cat[]
}

export async function getCatById(id: number) {
  const result = await request.get(`/api/v1/cats/${id}`)
  return result.body as Cat
}

export async function getClanList() {
  const result = await request.get('/api/v1/clans/')
  console.log(result.body)
  return result.body as Clan[]
}

export async function getClanCats(clan: string) {
  const result = await request.get(`/api/v1/clans/${clan}`)
  return result.body as Cat[]
}

// UPDATE FUNCTIONS

export async function updateCat(cat: Cat) {
  const result = await request.patch(`/api/v1/cats/${cat.id}`).send(cat)
  console.log(result.statusCode)
  return
}

// DELETE FUNCTIONS

export async function deleteCat(id: number) {
  const result = await request.delete(`/api/v1/cats/${id}`)
  console.log(result.statusCode)
  return
}
