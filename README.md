Reformed Lab "Reformed" - Deliverable 6 Report and System README
=================
Functionality 1 - User Profile
----------
This core functionality includes several small functions:
 - Sign up: Creates an account in the database and use it for later login. Simply click the "SIGN UP" button on homepage (https://reform-lab.herokuapp.com/) Security: password stored in hash.
 - Login: Authenticate your access to other functionalities. "LOGIN" button on homepage. (You are welcome to use a pre-prepared account with existing user profile and projects, try click the login button =)
 - Sign out: Log out from your account if you are accessing from a public computer. Mouse over the downward arrow on the top right corner of the page, and click "Sign Out". This is available in any page.
 - Profile Settings: Edit your profile location and description. Click the edit button on left block of profile page or use the link https://reform-lab.herokuapp.com/settings
 
Routes: userSignup, users
Views: Multiple components
Models: user


Functionality 2 - Reuse Ideas!
----------
This core functionality includes several parts:
 - New Project: create your new idea of reuse! Once logged in, you can see the "NEW PROJECT" button on the top right. This is on all pages.
 - Edit Project: edit you old projects. You can click the edit button on user profile item section or use the link https://reform-lab.herokuapp.com/user/daniel
 - Bookmarks: save the project you like to your bookmark, so you can easily find it in the sea of ideas. Mouse over the downward arrow on top right of page and click "bookmarks", or use the link https://reform-lab.herokuapp.com/bookmarks
 - Likes: give a thumb up for the ideas you like! click the thumb-up button when you see a item card, for example in homepage or in bookmark page.
 
 Route: items
 Views: Multiple components
 Model: item
 
 
 Functionality 3 - Leaderboard
 ----------
 This core functionality includes two parts:
  - Most Passionate Reformers: a ranking of users to create competition. Click the "Leaderboard" button on the top navigatopn bar. 
  - Most Popular Projects: a ranking of ideas to inspire good quality. https://reform-lab.herokuapp.com/leaderboard
  
  Routes: users, items
  Views: Multiple components
  Model: user, item
