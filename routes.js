const Router = require('express').Router
const assert = require('assert')

const appRouter = function(db) {
  const router = new Router()
  const client = db.collection('client')

  router.post('/', (req, res) => {
    client.insertOne(req.body, (err, result) => {
      if (err) return res.sendStatus(500)
      const doc = result.ops[0]
      res.json(doc)
    })
  })
  return router
}

module.exports = appRouter;
