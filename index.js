var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log("Request arrived.");
  res.send('Hello World');
})

app.listen(3000, function() {
	console.log('The server is set up, and listening on port 3000.')
});
