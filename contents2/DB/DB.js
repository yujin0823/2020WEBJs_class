const mysql = require('mysql2');
const {c} = require('./credential');

// jsp connection pool(스포닝 풀)
// Driver.getConnection
const pool = mysql.createPool(c);
// js 비동기 언어, ECMA2015(Promise)
// let r = await pool.query("SELECT");

const promisePool = pool.promise();

// module.exports.pool = promisePool;
module.exports = {
    pool: promisePool
};


