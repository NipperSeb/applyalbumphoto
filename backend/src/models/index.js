const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

db.images = require('./image.model.js')(sequelize, Sequelize)

module.exports = db
