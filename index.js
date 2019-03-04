const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './public/posters',
  filename: function(req, file, cb) {
    cb(null, '123' + file.originalname);
  },
});

const upload = multer({storage: storage});
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(upload.single('poster'));

const routes = require('./routes/routes.js');

routes(app);

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});
