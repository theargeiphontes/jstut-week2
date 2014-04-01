var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello!');
});

var server = app.listen(3200, function () {
    console.log('Listening on http://127.0.0.1:%d/', server.address().port)
});