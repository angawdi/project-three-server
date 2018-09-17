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

router.get('/addexpense', (req, res) => {
  db.Spending.create({
    month: 'may',
    category: 'housing',
    amount: 5000,
    description: 'boughtanewhouse'
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
