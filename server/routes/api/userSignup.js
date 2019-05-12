const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// for password hashing
const bcrypt = require('bcrypt');
// for login token
const jwt = require("jsonwebtoken");

const User = require('../../models/user');

router.post('/signup', (req, res, next) => {
  // First we check if the username already exists.
  User.find({email: req.body.email})
    .exec()
    .then(user => {
      console.log(user)
      // if user already exist (we use length >=1 because user is default null)
      if (user.length >= 1) {
        console.log("HELLO")
        return res.status(409).json({
          message: "Email already exists"
        });
      }
      // if user don't exist then we hash the password
      else{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          }
          else {
            var current_date = new Date();
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
                    // these fields are expected in input
                    email: req.body.email,
                    password: hash,
                    username: req.body.username,
                    name: req.body.name,
                    location: req.body.location,
                    dateJoined: current_date,
                    projects: req.body.projects,
                    bookmarks: req.body.bookmarks,
                    likes: req.body.likes,
                    description: req.body.description
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});


router.post('/login', (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    //get the user array but should have only one item in it
    .then(user => {
      if (user.length < 1){
        // not 404 to avoid brute force checking existence of email
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
            email: user[0].email,
            userId: user[0]._id
            },
          //private key
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Authentication successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Authentication failed"
        });

      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete('/:userId', (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.userId);
  User.remove({_id: id})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


module.exports = router;
