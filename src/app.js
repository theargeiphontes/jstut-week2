var express = require('express');
var swig = require('swig');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
    var html = swig.renderFile(process.cwd() + '/src/templates/index.html');
    res.send(html);
});

app.get('/notes', function(req, res) {
    fs.readFile(process.cwd() + '/notes.json', function(err, data) {
        res.send(data);
    });
});

var server = app.listen(3200, function () {
    console.log('Listening on http://127.0.0.1:%d/', server.address().port)
});