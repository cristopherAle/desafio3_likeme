const { Pool} = require ('pg')
require("dotenv").config();

const pool = new Pool({
    host: process.env.VITE_DB_HOST,
    user: process.env.VITE_DB_USER,
    database: process.env.VITE_DB_DATABASE,
    password: process.env.VITE_DB_PASSWORD,
    allowExitOnIdle: true
})

module.exports= {
    pool
}