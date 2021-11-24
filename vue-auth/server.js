var express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

var app = express();

app.use( cors() );
app.use( express.json() );
app.use( express.static('dist') );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})