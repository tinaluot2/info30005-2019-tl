- Please note: in case heroku is down, or mongodb atlas is unable to connect to heroku, please test with the localhost:3000 for now. Clone the repo and navigate to it in node.js console command, and start the server with command "nodemon server", then follow the same steps below with "localhost:3000" instead of "https://wit-website-reform.herokuapp.com"
- BIG URGENT NOTE: we can't seem to get heroku to deploy both frontend and backend at the same time even with Hobby Dyno. So, if you are testing and we haven't got our Heroku working yet then please open backend with localhost:3000 and front end with localhost:8080. Thank you!

Reformed Lab "Reformed" - Deliverable 4 README


=================
Required Programs for Testing
=================

- Postman (for running the /GET, /POST, /PATCH, /DELETE requests)
- OR localhost 8080 for front end and localhost 3000 for backend


==================
Functionalities
==================
We are testing the two core functionalities for deliverable four, incorporating Axios to connect our front end and back end.

1. Sign up/login

This is for the user to sign up to Reform and create basic user profile. The information that is inputted will be sent as a POST request and stored on our MongoDB under "user" database. The password they input will be hashed and stored.

The url for this sign up page is on the homepage and is a modal (pop up when sign up button is clicked): "https://wit-website-reform.herokuapp.com/"

Views:SignUpForm.vue, _userform.scss, SiteNavUser.vue, ItemDisplayGrid.scss, ItemDisplayGrid.vue
Routes:userSignup.js, users.js
Controllers:
Models:user.js (schema), userSignup.js (Schema)

2. Create a Project/Upload an item

This is for the user to upload a new project to Reform. The information that is inputted will be sent as a POST request and stored on our MongoDB under "items" database. 

The url for this can be accessed through the homepage by pressing 'New Project' button. or clicking New Project once a user is logged in: "https://wit-website-reform.herokuapp.com/create"

Views:UploadItemForm.vue, UploadItemForm.scss, SiteNavUser.vue, ImageUploader.vue, ImageUploader.scss, ItemDisplayGrid.scss, ItemDisplayGrid.vue
Routes:users.js. item.js
Controllers:
Models:user.js (schema), item.js (schema)
