const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./routes/routes.js');
routes(app);

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});
