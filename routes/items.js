const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

// Import schema
const Item = require('../models/items');

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

// ADD ITEM
router.post('/', (req, res, next) => {
  //add item data to database
  /*
  const item = new Item({
    itemID: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    itemCategory: req.body.itemCategory,
    itemHashtags: req.body.itemHashtags,
    itemImage: req.body.itemImage
  });
  */
  var current_date = new Date();
  const item = new Item({
    itemID: new mongoose.Types.ObjectId(),
    itemTitle: req.body.itemTitle,
  	creatorID: req.body.creatorID,
  	creatorName: req.body.creatorName,
  	material: req.body.material,
  	createdAt: current_date,
  	likeCount: req.body.likeCount,
  	images: req.body.images,
  	description: req.body.description,
  	isLiked: req.body.isLiked,
  	isBookmarked: req.body.isBookmarked

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

module.exports = router;
