const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const multer = require('multer');
const fs = require("fs");

// defining how the file is stored
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    //clean file name
    var fileName = (new Date().toISOString() + file.originalname)
    var cleanName = fileName.replace(/[^0-9a-zA-Z_.]/g, "")
    cb(null, cleanName)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    // accept a file
    cb(null, true)
  }
  else{
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter,
  dest: 'uploads/'
});

// Import schema
const Item = require('../../../models/items');

// GET ITEM
router.get('/', (req, res, next) => {
  //exec to get a true promise
  Item
    .find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length >= 0){
        res.status(200).json(docs);
      }
      else{
        //Empty array is not really a 404 error, but still
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

//GET ITEM IMAGE
router.get("/:fileName", (req, res) =>
{
  const options = {
    root: __dirname + "../../../../uploads/"
  };

  res.sendFile(req.params.fileName, options);
}
);

// ADD ITEM
router.post('/', upload.array('images', 10), (req, res, next) => {
  var filename = []
  for(var i = 0; i < req.files.length; i++) {
    filename.push(req.files[i].filename);
  }

  console.log(req.files)

  var current_date = new Date();
  const item = new Item({
    itemTitle: req.body.itemTitle,
  	creatorID: req.body.creatorID,
  	creatorName: req.body.creatorName,
  	material: req.body.material,
  	createdAt: current_date,
  	likeCount: req.body.likeCount,
  	images: filename,
  	description: req.body.description,
  	isLiked: req.body.isLiked,
    isBookmarked: req.body.isBookmarked,
    comments: req.body.comments
  });

  //method provided by mongoose
  item
    .save()
    .then(result => {
      console.log(result);
      //we want the success response inside the success condition
      res.status(201).json({
        message: 'your item has been uploaded successfully',
        item: item
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// UPDATE ITEM
router.patch('/:itemId', (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.itemId);
  //to check if all the attributes need to be chanegd, or just some of them.
  const updateOperations = {};
  //dynamic patch request
  for (const operations of req.body){
    updateOperations[operations.propName] = operations.value;
  }

  Item.update({_id: id}, { $set: updateOperations })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// DELETE ITEM
router.delete('/:itemId', (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.itemId);
  Item.remove({_id: id})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


// search item with itemId
router.get('/search/:itemId', (req, res, next) => {
    const id = mongoose.Types.ObjectId(req.params.itemId);

    Item.findById(id)
        .exec()
        .then(doc => {
            console.log("From Item", doc);
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


// add a comment to a item
router.post('/comments/:itemId', (req, res, next) => {
  const id = req.params.itemId;

  Item.update({_id: id}, {$push: {"comments": {
    "user": req.body.comments.user,
    "datePosted": req.body.comments.datePosted,
    "text": req.body.comments.text}}})
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
{
"comments": {"user": "abc", "datePosted": "This should be in Date format", "text": "this is a comment"}
}
*/
});

//get comments for an item
router.get('/:itemId/comments', (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.itemId);

  Item.findById(id)
    .exec()
    .then(doc => {
        console.log("From item", doc);
        if (doc) {
          res.status(200).json(doc.comments);
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

module.exports = router;
