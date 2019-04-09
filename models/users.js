const express = require('express');
var app = express();
var router = express.Router()

var user_profiles =  [

		{
			"name": "Gigi Leung",
      "user_id": "1234",
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
      "user_id": "1235",
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
      "user_id": "1236",
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
      "user_id":"1237",
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

  var item_profile_data = [
    {
      "item_name": "Glass bottle lamp".
      "item_id": "1234"
      "item_description": "Lamp made from recycled glass Coke bottles",
      var image = new_image("https://i.pinimg.com/originals/7b/81/f9/7b81f94ce50e7f5d6c5d694410cd3f31.jpg")
    }
  ]

/*need post, put and delete as well; post is create*/

app.get('/user_profile', function(req, res)){

    res.send(user_profiles);
}

app.get('/item_profile', function(req, res)){

  res.send(item_profile_data);
  app
}

app.get('/login_page', function(req, res)){

  res.send(fake_login);
}

app.listen(3000, function(){
    console.log("Server started at 3000");
});
