const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'items were fetched'
  });
});

router.post('/', (req, res, next) => {
  const item = {
    userID: req.body.userId,
    itemName: req.body.itemName
  };
  res.status(201).json({
    message: 'items were created',
    item: item
  });
});

router.get('/:itemId', (req, res, next) => {
  res.status(200).json({
    message: 'item details',
    itemId: req.params.itemId
  });
});

router.delete('/:itemId', (req, res, next) => {
  res.status(200).json({
    message: 'item deleted',
    itemId: req.params.itemId
  });
});

module.exports = router;
