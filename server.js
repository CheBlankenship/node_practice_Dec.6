const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/year', function(req, res) {

  var d = new Date();
  var year = d.getFullYear();
  console.log(year);
  var age = req.body.age || 'years old';

  var born = year -age;

  res.send('Ur born in ' + born + '!');
  // res.json({
  //   message: 'Ur ' + age + '!'
  // });
});


app.listen(3000, function(){
  console.log('Example app listening on part 3000');
});
