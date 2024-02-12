'use strict'
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

// function to create connection to the SQL database
function createConnection(){

    var AzureConfig = {
        authentication: {
          options: {
            userName: process.env.DB_USER, 
            password: process.env.DB_PASS
          },
          type: "default"
        },
        server: process.env.SERVER, 
        options: {
          database: process.env.DB_NAME, 
          encrypt: true, 
          //validateBulkLoadParameters: true
        }
    };

    // create connection to the database 

    var connection = new Connection(AzureConfig);
 
    return connection;
    
}// end create connection
// function to configure request to be sent to the SQL server
function configureRequest(sql, conn, parameters){

    var request = createRequest(sql, conn);
    
    parameters.forEach(function(param){
        request.addParameter(param.name, param.type, param.data);
    });

    return request;

}


// create query request
function createRequest(query, connection){

    var Request = require('tedious').Request;

    var req = new Request(query, function(err, rowCount) {
        if(err){
            console.log(err);

        }

        connection && connection.close();
    });

    return req;
}


// Running the query
function runQuery(query, connection, callback){
    var request = query;
    
    if(typeof query == 'string'){
        request = createRequest(query, connection);
    }

    var values = '';

    // the rows are returned as a json array. Since it's sent in a batch, 
    // different events are raised. 
    // So the values are concatenated to create a single JSON object
    request.on('row', function(column) {
        values += column[0].value;
    });

    
    // if anything specific needs to be done after the process is complete
    request.on('done', function(rowCount, more, rows){
       
        // check if the SQL Server returned anything
        values = checkValues(values);
        
        callback(values);

    });

    // if anything specific needs to be done after the stored procedure is complete
    // however, if we use connection.execSql(), it emits doneProc instead of done.
    request.on('doneProc', function(rowCount, more, rows){

        // check if the SQL Server returned anything
        values = checkValues(values);    
        callback(values);

    });

    try {
        executeRequest(request, connection);
    } catch(err){
        throw err
    }

    // return the values parsed as JSON
    // return JSON.parse(values);
    return values;
}


// function to check values if the response from SQL Server is empty
function checkValues(values){
    
    if (values === ''){
        // needs to be set to null if the SQL Server return nothing.
        // This is required to ensure JSON is correctly parsed. 
        values = null;

    }
    
    return values;
}



// execute request to pull the data
function executeRequest(request, connection){
    
    connection.on('connect', function(err){
        if(err){
            console.log(err);
            res.send(err);
        }

        connection.execSql(request);
    });
}

function executeStatement1(connection) {  
  var request = new Request("INSERT dbo.users (userId,firstName,lastName,email,password,address,city,postCode,phone,photo,documentName,role) OUTPUT INSERTED.userId VALUES (1, 'Mou','Dey','mou@gmail.com','pass@123','','kolkata','700125','9547738440','','','Admin');", function(err) {  
  //let sql = `INSERT INTO dbo.users (userId,firstName,lastName,email,password,address,city,postCode,phone,photo,documentName,role) VALUES (1, 'Mou','Dey','mou@gmail.com','pass@123','','kolkata','700125','9547738440','','','Admin')`;

  if (err) {  
      console.log(err);}  
  });  
  request.addParameter('firstName', TYPES.NVarChar,'Mou');  
  request.addParameter('lastName', TYPES.NVarChar , 'De');  
  request.addParameter('email', TYPES.NVarChar , 'mou@gmail.com');  
  request.addParameter('password', TYPES.NVarChar , 'pass@123');  
  request.addParameter('address', TYPES.NVarChar , '');  
  request.addParameter('city', TYPES.NVarChar , 'kolkata');  
  request.addParameter('postCode', TYPES.NVarChar , '700125');  
  request.addParameter('phone', TYPES.NVarChar , '9547738440');  
  request.addParameter('photo', TYPES.NVarChar , 'example.jpg');  
  request.addParameter('documentName', TYPES.NVarChar , 'document.doc');  
  request.addParameter('role', TYPES.NVarChar , 'Admin');  

  request.on('row', function(columns) {  
      columns.forEach(function(column) {  
        if (column.value === null) {  
          console.log('NULL');  
        } else {  
          console.log("user id of inserted item is " + column.value);  
        }  
      });  
  });

  // Close the connection after the final event emitted by the request, after the callback passes
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
  });
  connection.execSql(request);  
}  

module.exports.createConnection = createConnection;
module.exports.createRequest = createRequest;
module.exports.executeRequest = executeRequest;
module.exports.configureRequest = configureRequest;
module.exports.runQuery = runQuery;
module.exports.executeStatement1 = executeStatement1;