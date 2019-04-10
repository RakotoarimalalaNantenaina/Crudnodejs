
var monroute = require('./Route/route');    
var cors = require('cors')
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ({extended:true }));
app.use(bodyParser.json ());
app.use(cors())
app.listen(8080);
app.use('/', monroute)

console.log('Server demarer');