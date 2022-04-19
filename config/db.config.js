const Sequelize = require('sequelize')
const DB_NAME = 'dbhitsa2019'
const USER_NAME = 'ruuvi_sel'
const PASSWORD = 'ruuvisel'
const HOST = 'dev.vk.edu.ee'
const PORT = 5432
const DIALECT = 'postgres'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: DIALECT
})
module.exports = sequelize