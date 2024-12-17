import express from 'express'
import * as db from '../db/db'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  try {
    const clans = await db.getClans()
    res.json(clans)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

router.get('/:clan', async (req, res) => {
  try {
    const clan = req.params.clan.toLowerCase()
    const cats = await db.getCatsByClan(clan)
    res.json(cats)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

router.post('/:clan', async (req, res) => {
  try {
    console.log(req.body)
    const newCat = req.body
    const id = await db.addCat(newCat)
    res.json({ ...newCat, id: id[0] })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})
