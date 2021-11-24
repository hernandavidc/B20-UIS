var express = require('express');
var app = express();

app.use( cors() );
app.use( express.json() );
app.use( express.static('nuevacarpeta') );

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {
  res.sendFile('/index.html')
});