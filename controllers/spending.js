const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Spending.find()
  .then(spendings => {
      res.send(spendings);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

router.post('/', (req, res) => {
  db.Spending.create({
    date: req.body.date,
    amount: req.body.amount,
    description: req.body.description  
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
