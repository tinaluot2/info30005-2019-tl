const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

// import schema
const Item = require('../models/items');

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

router.post('/', (req, res, next) => {
  //add item data to database
  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescriptio,
    itemCategory: req.body.itemCategory,
    itemHashtags: req.body.itemHashtags,
    itemImage: req.body.itemImage,
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
