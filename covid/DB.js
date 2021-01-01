const mysql = require('mysql');

const connectionInfo = {
    user: 'yy_20104',
    password: '1234',
    host:'gondr.asuscomm.com',
    database: 'yy_20104'
};

const con = mysql.createConnection(connectionInfo);

module.exports.con = con;