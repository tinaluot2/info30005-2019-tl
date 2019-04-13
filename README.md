Reformed Lab "Reformed" - Deliverable 2 README

==============================
Required Programs for Testing
==============================

- Postman (for running the /GET, /POST, /PATCH, /DELETE requests)

============================
Command Line Arguments
============================
 To test for the three functionalities (user signup, user profile and item profiles), here are some commands you can type under Body tab (select raw AND JSON(application/json)) terminal:

For the first two functionalities (user signup and user profile) "localhost:3000/users" will show all users and "localhost:3000/users/userId" will search by id.

1. User signup:
- /POST request for new user
	Sample input for this:

	{name: "John",
  	email: {
    	type: "johndoe@gmail.com",
    	required: true,
    	unique: true
  	}
	password: { type: "hello12345", required: true },
  	age: 20,
  	birthday: "20/5/1995",
  	gender: "male"}

- /DELETE request for a specific user
	Go to "/userSignup/delete/:userId" and request delete with userId such as 5cb068307d67803aa025ac2a
	Sample input:
	
	"/userSignup/delete/5cb068307d67803aa025ac2a"

2. User profile
- /PATCH request to update a specific user profile detail e.g. name
	Note that PATCH requests require a special input format (not an object like the others, but an array)
	Sample input for this request:

    	[
        { "propName": "name", "value": "Harry Potter - patch updated" }
    	]

- /GET request for specific user ID
	Sample input:
	
	"/users/userID/5cb1af07af635a35f42aa0bd"

3. Item profile

- /GET request for specific item
	Sample input:

	"items/itemID/5cb1a4d61c9d4400003a5bb5"

- /POST request for new item

	{itemName: "Terrarium Fairy Lights",
  	itemDescription: "These are perfect for Christmas."
	itemCategory: "glass",
  	itemArray: ["glass", "batteries", "paint", "candles", "wires", "tape],
	itemImage: "https://i.imgur.com/xOOpLe2.png"
	}	

- /DELETE request for specific item
	Sample Input:

	"items/itemID/5cb1a4d61c9d4400003a5bb5"

=================================
Extra Notes
=================================
-When testing in Postman, don't forget to set Header -> Content-Type ticked and set to application/json.
**We tested all these functions on Postman, and linked to MongoDB where we made our databases.
