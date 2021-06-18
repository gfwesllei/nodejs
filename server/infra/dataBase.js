const pgp  = require('pg-promise')()
require('dotenv').config();

const db = pgp({
    // user: process.env.USER_NAME,
    // password: process.env.USER_PASSWORD,
    // host: process.env.SERVER_HOST,
    // port: process.env.SERVER_PORT,
    // database: process.env.DATA_BASE
    user: 'postgres',
    password: 'passwd',
    host: 'localhost',
    port: 5434,
    database: 'blog'
});

module.exports =db;
