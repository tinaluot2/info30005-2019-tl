const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

// inport schema
const User = require('../../../models/user');

router.get('/', (req, res, next) => {
  //exec to get a true promise
  User
    .find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length >= 0){
        res.status(200).json(docs);
      }
      else{
        //in fact an empty array is not really a 404 error, but still
        res.status(404).json({
          message: 'No entries found'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/projects'), (req, res, next) => {
  User
  .find()
}
// signup function is in userSignup.js

router.get('/:userId', (req, res, next) => {
  //when assigning input id to a variable, need to convert string to ObejctId
  const id = mongoose.Types.ObjectId(req.params.userId);

  User.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      //error handling: when input is not found, we don't want to just show 'null'
      if (doc) {
        res.status(200).json(doc);
      }
      else {
        res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
});


router.get('/:userId/bookmarks', (req, res, next) => {
    const id = mongoose.Types.ObjectId(req.params.userId);

    User.findById(id)
        .exec()
        .then(doc => {
            console.log("From user", doc);
            if (doc) {
              res.status(200).json(doc.bookmarks);
            }
            else {
              res.status(404).json({message: 'No valid entry found for provided ID'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});


router.post('/bookmarks/:username', (req, res, next) => {
  const username = req.params.username;

  User.update({"username": username}, {$push: {"bookmarks": req.body.itemId}})
	.then(doc => {
		if (doc) {
			res.sendStatus(200);
		}
		else {
			res.sendStatus(404);
		}
	})
	.catch(err => {
		res.sendStatus(500);
	});

});

//delete function is in userSignup.js

module.exports = router;
