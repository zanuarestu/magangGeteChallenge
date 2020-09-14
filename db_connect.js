const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'magang_challenge'
});

conn.connect(function(err) {
    if(err) throw err;
    console.log('MySql Connected...');
});

module.exports=conn;