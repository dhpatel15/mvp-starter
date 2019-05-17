const express = require('express');
const bodyParser = require('body-parser');
// const items = require('../database-mysql');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(4000, function() {
  console.log('listening on port 3000!');
});

