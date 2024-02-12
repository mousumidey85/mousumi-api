const express = require('express');
//const mssql = require('mssql');
var Connection = require('tedious').Connection;
var Requests = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// connect to your database

//var connection = new Connection(config);  

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3001;

const sqlConfig = require("./config/db.js")

// Middleware to parse JSON requests
app.use(express.json());

// Define routes



app.post('/api/user', async (req, res) => {
  console.log('into user API');
  
  try {

    let conn = sqlConfig.createConnection()

    conn.on('connect', function(err) {  
      // If no error, then good to proceed.  
      if(err){
        console.log("errerrerrerr",err);
      }
      else{
        var insertedData = sqlConfig.executeStatement1(conn);
        console.log("Connected"); 
      }
     // console.log("insertedDatainsertedDatainsertedData",insertedData);
  });
  conn.connect();
  } catch (err) {

    console.error(err);
    res.status(500).send('Internal Server Error');
  }

});

// Get all inquiries
app.get('/api/users', async (req, res) => {
  try {
    //const pool = await mssql.connect(sqlConfig);
    // var connection = new Connection(sqlConfig);  
    // connection.on('connect', function(_err) {  
    //   // If no error, then good to proceed.
    //   console.log("Connected");  
    // });

    // connection.connect();
    //const result = await pool.request().query('SELECT * FROM users');
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
