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

// Get bookmarks of a user
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

// add a bookmark to a user
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
/* sample input for this request:
    	{ "itemId": "123"}
*/
});

// Get projects of a user
router.get('/:userId/projects', (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.userId);

  User.findById(id)
    .exec()
    .then(doc => {
        console.log("From user", doc);
        if (doc) {
          res.status(200).json(doc.projects);
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


// add a project to a user
router.post('/addproject/:username', (req, res, next) => {
  const username = req.params.username;

  User.update({"username": username}, {$push: {"projects": req.body.itemId}})
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
/* sample input for this request:
    	{ "itemId": "123"}
*/
});

// Remove bookmark from a user
router.post('/removebookmark/:username', (req, res, next) => {
  const username = req.params.username;

  User.update({"username": username}, {$pull: {"bookmarks": req.body.itemId}})
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
/* sample input for this request:
    	{ "itemId": "123"}
*/
});

// Remove project from a user
router.post('/removeproject/:username', (req, res, next) => {
  const username = req.params.username;

  User.update({"username": username}, {$pull: {"projects": req.body.itemId}})
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
/* sample input for this request:
    	{ "itemId": "123"}
*/
});

//delete function is in userSignup.js

module.exports = router;
