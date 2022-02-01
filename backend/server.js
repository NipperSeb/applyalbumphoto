const express = require('express')
const app = express()
const db = require('./src/models')
const initRoutes = require('./src/routes/web')
const cors = require('cors')

global.__basedir = __dirname

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(initRoutes)

//db.sequelize.sync()
db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and re-sync db.')
})

let port = 8000
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})
