const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

// inport schema
const User = require('../../models/user');

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
router.patch('/:userId', (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.userId);

  //to check if all the attributes need to be chanegd, or just some of them.
  const updateOperations = {};
  //dynamic patch request
  for (const operations of req.body){
    updateOperations[operations.propName] = operations.value;
  }

  User.update({_id: id}, { $set: updateOperations })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result)
    }).
    catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

/* sample input for this request:
    [
    	{ "propName": "name", "value": "Harry Potter - patch updated" }
    ]
*/

});

//delete function is in userSignup.js

module.exports = router;
