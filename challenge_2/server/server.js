var jsoncsvparser = require('./json-csv-parser.js');

var express = require('express');
var cors = require('cors');
var parser = require('body-parser');

var app = express();
module.exports.app = app;

app.set('port', 3000);

app.use(cors());
app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));

app.use(express.static('client'));

app.post('/upload_json', (req, res) => {
  let csvStr = jsoncsvparser.parser(req.body);
  // console.log(csvStr);
  // res.status(200).send('hi from server');
  // res.write(csvStr);
  res.status(200).send(csvStr);
});

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

  

