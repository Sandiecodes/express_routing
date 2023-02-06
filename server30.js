const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1> Hello Sandra </h1>');
  
}); 



app.listen(8080);

console.log('up and running');

