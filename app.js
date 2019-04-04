const express = require('express');
var app = express();


app.get('/', function(req, res){

    res.send("Group Name: Homepage");
})

app.get('/all', function(req, res){

    res.send(array);
})


app.listen(3000, function(){
    console.log("Server started at 3000");
});
