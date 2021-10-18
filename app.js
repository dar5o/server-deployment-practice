'use strict';

const express = require('express');
const app = express();
const repeat = require('./routes/repeat');
const talk = require('./routes/talk')
app.use(express.json());

app.use(function(req, res, next) {
  console.log(req.method);
  //middleware needs next to be called
  next();
});
//configuring our server with a function to respond and request
app.post('/talk', talk);

app.get('/repeat', repeat);

module.exports = app;