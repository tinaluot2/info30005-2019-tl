- Please note: in case heroku is down, or mongodb atlas is unable to connect to heroku, please test with the localhost:3000 for now. Clone the repo and navigate to it in node.js console command, and start the server with command "nodemon server", then follow the same steps below with "localhost:3000" instead of "https://wit-website-reform.herokuapp.com"

Reformed Lab "Reformed" - Deliverable 2 README


=================
Required Programs for Testing
=================

- Postman (for running the /GET, /POST, /PATCH, /DELETE requests)


==================
Setup Postman
==================
Homepage: GET https://wit-website-reform.herokuapp.com
 To test for the three functionalities (user signup, user profile and item profiles), here are some commands you can type under Body tab (select raw AND JSON(application/json)) terminal:
 -Please make sure to set Header -> Content-Type ticked and set to application/json.

For User Signup:
========
1. Sign up a new user:
POST request with route '/userSignup/signup'.
The format of input is 
	{
	"name": "Daniel Vu",
  	"email": "dh.vu@unimelb.edu.au",
	"password": "hello123",
	"age": "1342534534",
	"birthday": "14/04/2019",
	"gender": "male"
	}
Note that email will be the username, so there is a validation to make sure email is unique (you can try enter same email twice). The password is hashed using bcrypt so it's safe to let it store in our database =) 
Only email and password are required fields, others are optional and they can be input in any order.

2. Delete a user:
DELETE request with route '/userSignup/userID'.
The userID is created when you sign up and output in the response window. If you lost it, you can use the GET request which will be explained later. replace the 'userID' with that id.


For User Profile:
========
1. Show all users:
GET '/users'

2. Search for a user using userId:
GET '/users/userID'
userId is explained above.

3. Update an attribute in a user profile:
PATCH '/users/userID'
The format of input is (note the outside brackets are array not an object):
[
    { "propName": "name", "value": "Souper Daniel" }
]
*where "propName" is the name of attribute you want to change, and "value" is what you want to change it to. You can change multiple fields at once with multiple objects in the same array (there's a for loop going through the array).


For item profile
========
1. View all items:
GET '/items'

2. Create new item:
POST '/items'
The format of input is:
{
	"itemName": "a name",
	"itemDescription": "some descriptions",
	"itemCategory": "this is a category",
	"itemHashtags": ["an array", "of hashtags"],
	"itemImage": "this is a link to the image"
}

3. Update an attribute of an item profile
PATCH '/items/itemId'
The format of input is similar to user profile editing
[
    { "propName": "itemName", "value": "don't forget the outside is square brackets" }
]

4. Delete an item
DELETE '/items/itemId'




=================================
Extra Notes
=================================

**The data are stored in mongoDB
