const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const mysql = require('mysql');

 
// parse application/json
router.use(bodyParser.json());


// database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magang_challenge'
  });
   
  //connect to database
  conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  });


//show list user
router.get('/',(req, res) => {
    const sql = "SELECT * FROM Users";
    const query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
   
//show list user with id
router.get('/user/:id',(req, res) => {
    const sql = "SELECT * FROM Users WHERE id="+req.params.id;
    const query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  
//create new user
router.post('/',(req, res) => {
    const data = {id: req.body.id, fullname:req.body.fullname, username: req.body.username, password: req.body.password};
    const sql = "INSERT INTO Users SET ?";
    const query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log(req.body.fullname)
    });
  });
   
//update user
router.put('/user/:id',(req, res) => {
    const sql = "UPDATE Users SET fullname='"+req.body.fullname+"', username='"+req.body.username+"',password='"+req.body.password+"' WHERE id="+req.params.id;
    const query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log(req.body.fullname)
    });
  });
   
//Delete data product berdasarkan id
router.delete('/user/:id',(req, res) => {
    let sql = "DELETE FROM Users WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
  
 
module.exports = router;