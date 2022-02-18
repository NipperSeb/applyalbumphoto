const express = require('express')
const app = express()
const db = require('./src/models')
const initRoutes = require('./src/routes/web')
const cors = require('cors')

global.__basedir = __dirname

let corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

app.use(cors(corsOptions))
//send images frontend
app.use(express.static('resources'))
// parse requests of content-type - application/json
app.use(express.json())

app.use(initRoutes)

//db.sequelize.sync()
db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and re-sync db.')
})

let port = 8000
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})
