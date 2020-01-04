var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json({limit: '5000kb'}));
var connection = require('./connection');


var Users = require("./Router/users");
app.use("/users" , Users)

app.get('/index', function (req, res) {
    res.send('Index');
});


app.set('port', process.env.PORT || 9000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
