const express = require('express');
var app = express();

var array =  [
        {
			"name": "Gigi Leung",
			"height": "159",
			"birth_date": "07/03/1995",
			"gender": "female",
			"location": "https://goo.gl/maps/pHThkiRXBL12",
			"email_address": "gleung@student.unimelb.edu.au",
			"username": "gleung",
			"password": "gleung1234",
		},

		{
			"name": "Gigi Leung",
			"username": "gleung",
			"password": "gleung1234",
			"birth_date": "07/03/1995",
			"gender": "female",
			"location": "https://goo.gl/maps/pHThkiRXBL12",
			"email_address": "gleung@student.unimelb.edu.au",
			"interests": [
				"recycling",
				"the environment"
			]
		},

		{
			"name": "Tina Luo",
			"username": "luot2",
			"password": "luot21234",
			"birth_date": "27/04/1997",
			"gender": "female",
			"location": "https://goo.gl/maps/pHThkiRXBL12",
			"email_address": "luot2@student.unimelb.edu.au",
			"interests": [
				"recycling",
				"the environment"
			]
		},

		{
			"name": "Marin Iida",
			"username": "mariniida",
			"password": "mariniida1234",
			"birth_date": "07/12/1997",
			"gender": "female",
			"location": "https://goo.gl/maps/pHThkiRXBL12",
			"email_address": "mariniida@student.unimelb.edu.au",
			"interests": [
				"recycling",
				"the environment"
			]
		},

		{
			"name": "Mark Junge Wang",
			"username": "jungew",
			"password": "jungew1234",
			"birth_date": "29/11/1998",
			"gender": "male",
			"location": "https://goo.gl/maps/pHThkiRXBL12",
			"email_address": "jungew@student.unimelb.edu.au",
			"interests": [
				"recycling",
				"the environment"
			]
		},
    ]




app.get('/users', function(req, res){

    res.send(array);
})


app.listen(3000, function(){
    console.log("Server started at 3000");
});
