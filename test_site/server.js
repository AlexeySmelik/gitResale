var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
  console.log(__dirname + '/');
});

app.listen(3000);
console.log('BOMB has been plating!!!');
