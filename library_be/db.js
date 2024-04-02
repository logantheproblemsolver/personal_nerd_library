require('dotenv').config();
const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();


console.log('db password', process.env.database_password)
const db = knex({
  client: process.env.database_client,
  connection: {
    host : process.env.database_host,
    port : process.env.database_port,
    user : process.env.database_user,
    password : process.env.database_password,
    database : process.env.database_name
  }
})

module.exports = db;