const express = require('express');
var app = express();
const users = require('./models/users')
var router = express.Router()

app.get('/', function(req, res){

    res.send("Souper Noodle Lab");
})

app.get('/users', function(req, res){

    res.send("users page");
})

app.get('/Ideas', function(req, res){

    res.send("Reuse ideas page");
})

app.get('/marketplace', function(req, res){

    res.send("marketplace page");
})

app.get('/search', function(req, res){

    res.send("search page");
})

app.get('/about', function(req, res){

    res.send("about page");
})

app.get('/recycling', function(req, res){

    res.send("Recycling page");
})

app.get('/signup', function(req, res){

    res.send("signup page");
})

app.get('/login', function(req, res){

    res.send("login page");
})

app.get('/account', function(req, res){

    res.send("account page");
})

app.listen(3000, function(){
    console.log("Server started at 3000");
});
