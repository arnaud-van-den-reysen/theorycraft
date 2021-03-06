var express = require('express');
var app = express();
var fs = require("fs");

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/listChampions', function (req, res) {
   fs.readFile( __dirname + "/" + "champions.json", 'utf8', function (err, data) {
      //console.log( data );
      res.end( data );
   });
})

app.get('/champion/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "champions.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.get('/listItems', function (req, res) {
   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
      //console.log( data );
      res.end( data );
   });
})

app.get('/item/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})