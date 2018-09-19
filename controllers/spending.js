const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Spending.find({
    "category": {"$ne": "income"}
  })
  .then(spendings => {
      console.log(spendings);
      res.send(spendings);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});


router.post('/', (req, res) => {
  console.log('adding spending!', req.body)
  db.Spending.create({

    date: req.body.date,
    amount: req.body.amount,
    description: req.body.description,
    category: req.body.category,
    userId: req.body.userId

  })
  .then(result => {
    res.send('success');
  })
  .catch(err => {
    console.log(err);
    res.send('error, check your logs');
  });
});


module.exports = router;
