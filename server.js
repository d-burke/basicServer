// Basic Express server example from the internet
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/', function(request, response){
   response.send('hello world');
});

app.post('/', function(request, response){
   response.status(418).send('tea time');
});

// Get all messages.
app.get('/messages', function (request, response) {});

// Get a single message.
app.get('/messages/:id', function (request, response) {});

// Post a new message.
app.post('/messages', function (request, response) {});

// Update a single message.
app.put('/messages/:id', function (request, response) {});

// Delete a single message.
app.delete('/messages/:id', function (request, response) {});

// 127.0.0.1:1337
var server = app.listen(1337, '127.0.0.1', function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log(server.address());
   console.log(server.address().address);
   console.log(server.address().port);


   console.log("Example app listening at http://" + host + ":" + port);
});