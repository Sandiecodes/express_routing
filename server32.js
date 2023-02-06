// Every time the app receives a request, it prints the message “mw1” to the terminal.
const express = require('express');

const app = express();

function mw1(req, res, next) {
  console.log('mw1');
  next();
}

function myFunction1(req, res, next) {
  res.send('<h1> Hello Ralph 2 </h1>');
   
}

app.get('/', mw1, myFunction1);

app.listen(8080);

console.log('up and running');

