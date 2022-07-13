const express = require('express');
const mysql = require('mysql');
var mysql2 = require('mysql2');
const db = require("../NodeProject/app/model")
 const bodyParser = require("body-parser");
// var con = mysql2.createConnection({
//     host: db.host,
//     port: db.port,
//     database: db.database,
//     user: db.user,
//     password: db.password
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });



//  const
require('dotenv').config()
const path = require('path')

const app = express()
const port = 8080;

app.get('/', (req, res) => {
   res.send("we are inside node project")
})

app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use (bodyParser.urlencoded({extended:true}));

const Saurabh = { name: 'Saurabh Kumar', age: 26, gender: 'male', isOwner: true }
console.log('Saurabh Logged-->', Saurabh)
'+database_connection_status+'

app.get('/saurabh', (req, res) => {
//     con.query("SELECT * FROM tutorials_tbl", function (err, result, fields) {
//     if (err) throw err;
//     res.send(result)
//     console.log(result);
//   });
})

require("./app/routes/tutorial.routes")(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`.toUpperCase()) 
})

db.sequelize.sync();