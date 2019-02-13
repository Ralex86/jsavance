const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

const MOVIES = require('./movies.js')

app.get('/', (req, res) => {
  res.json(MOVIES)
})


app.listen(port, function() {
  console.log(`listening on port: ${port}`)
})
