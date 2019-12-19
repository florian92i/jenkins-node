var express = require('express');

var app = express();

app.set('port', process.env.PORT);

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Yo benoit');
});

app.listen(80);
