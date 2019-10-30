var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/index.html');
  console.log(__dirname + '/');
});

app.listen(3000);
console.log('Server start on port 127.0.0.1:3000');
