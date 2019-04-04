const express = require('express');
var app = express();

app.get('/', function(req, res){

    res.send("homepage");
})

app.listen(3000, function(){
    console.log("Server started at 3000");
});
