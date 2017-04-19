var express = require('express');
var app = express();
var path = require('path');
var PORT = 8888;

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.use('*', function (req, res, next) {
  console.log('hit!');
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Listening on PORT %s', PORT);