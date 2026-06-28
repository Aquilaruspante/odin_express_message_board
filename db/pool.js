const { Pool } = require('pg');

console.log(process.env.PASSWORD);

const pool = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
});

console.log(pool.host);

module.exports = pool;
