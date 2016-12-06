const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/year', function(req, res) {

  var d = new Date();
  var year = d.getFullYear();
  var age = req.body.age || '!';

  res.send('Ur born in ' + year - age );
  // res.json({
  //   message: 'Ur ' + age + '!'
  // });
});


app.listen(3000, function(){
  console.log('Example app listening on part 3000');
});


app.use(bodyParser.json());
