import { Router, json } from 'express'
import db from '../db'

const comments = new Router()
comments.use(json())

comments.get('/', async (req, res) => {
  try {
    const result = await db('comments').select()
    res.json(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default comments