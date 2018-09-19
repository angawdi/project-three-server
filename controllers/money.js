const express = require('express');
const router = express.Router();
const db = require('../models');



router.get('/all', (req, res) => {
  db.Spending.find({
    'category': 'income'
  })
  .then(spendings => {
      res.send(spendings);

  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});



router.post('/all', (req, res) => {
  db.Spending.create({
    date: req.body.date,
    category: 'income',
    amount: req.body.amount,
    description: req.body.description,
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
