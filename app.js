const express = require('express');
const app = express();
var pairs = {};

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.get('/set', function (req, res) {
  for(var key in req.query) {
    pairs[key] = req.query[key];
  }
  res.redirect('/');
});

app.get('/get', function (req, res) {
  if (typeof req.query['key'] === 'string') {
    res.send(pairs[req.query['key']]);
  } else {
    res.redirect('/');
  }
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

module.exports = { 
  app: app,
  pairs: pairs };
