- Please note: in case heroku is down, or mongodb atlas is unable to connect to heroku, please test with the localhost:3000 for now. Clone the repo and navigate to it in node.js console command, and start the server with command "nodemon server", then follow the same steps below with "localhost:3000" instead of "https://wit-website-reform.herokuapp.com"

Reformed Lab "Reformed" - Deliverable 4 README


=================
Required Programs for Testing
=================

- Postman (for running the /GET, /POST, /PATCH, /DELETE requests)


==================
Functionalities
==================
We are testing the two core functionalities for deliverable four, incorporating Axios to connect our front end and back end.

1. Sign up

This is for the user to sign up to Reform and create basic user profile. The information that is inputted will be sent as a POST request and stored on our MongoDB under "user" database. The password they input will be hashed and stored. 

The url for this sign up page is on the homepage and is a modal (pop up when sign up button is clicked): "https://wit-website-reform.herokuapp.com/"

Views:
Routes:userSignup.js, users.js
Controllers:
Models:user.js (schema)

2. Create a Project/Upload an item

This is for the user to sign up to Reform. The information that is inputted will be sent as a POST request and stored on our MongoDB under "user" database. The password they input will be hashed and stored. 

The url for this can be accessed through the homepage by pressing 'New Project' button: "https://wit-website-reform.herokuapp.com/create"

Views:UploadItemForm.vue, UploadItemForm.css, SiteNavUser.vue
Routes:users.js
Controllers:
Models:user.js (schema)
