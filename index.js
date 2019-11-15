var express = require('express');

var app = express();

app.set('port', process.env.PORT);

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil BBBBBBBRRRRRRRRRRRAAAAAAAAAAWWWWWWWWWWWWW');
});

app.listen(8080);
