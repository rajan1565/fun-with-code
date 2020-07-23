var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log(req);
    console.log("Requested for home page");
    res.sendFile(path.join(__dirname + '/sample_form.html'));
});


app.listen(8080);