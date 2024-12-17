import express from 'express'
import * as db from '../db/db'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  try {
    const cats = await db.getAllCats()
    res.json(cats)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const cat = await db.getCatById(id)
    res.json(cat)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.removeCatById(id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const newCat = { ...req.body, id: +req.params.id }
    await db.updateCat(newCat)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})
