const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// for password hashing
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
  // First we check if the username already exists.
  User.find({email: req.body.email})
    .exec()
    .then(user => {
      // if user already exist (we use length >=1 because user is default null)
      if (user.length >= 1) {
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
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              // these fields are expected in input
              email: req.body.email,
              password: hash,
              name: req.body.name,
              age: req.body.age,
              birthday: req.body.birthday,
              gender: req.body.gender
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
})


module.exports = router;
