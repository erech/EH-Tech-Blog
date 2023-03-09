// Import sequelize
const { Sequelize } = require('sequelize')
require('dotenv').config()

// Connect to database
const sequelize = process.env.BLOGDB_URL ?


new Sequelize(process.env.BLOGDB_URL) :
new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
host: 'localhost',
dialect: 'mysql',
port: 3306
});

module.exports = sequelize;