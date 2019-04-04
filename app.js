const express = require('express');
var app = express();
var users = require('./models/users')
var router = express.Router()

app.get('/', function(req, res){

    res.send("homepage");
})

router.get('/users', function(req, res){

    res.send(array);
})

app.listen(3000, function(){
    console.log("Server started at 3000");
});
