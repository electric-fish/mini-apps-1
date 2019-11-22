var express = require('express');
const path = require('path');
const parser = require('body-parser');

var app = express();
module.exports.app = app;

app.set('port', 3000);

app.use("/", express.static(path.join(__dirname, '../client/dist')));
app.use(parser.text());

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(':)');
});

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}