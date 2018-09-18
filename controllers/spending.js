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
    userId: req.params.userid,
    date: req.body.date,
    category: req.body.category,
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

router.get('/allmoney', (req, res) => {
  db.Spending.find({spendingCategory: 'income'})
  .then(spendings => {
      res.send(spendings);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

router.get('/addmoney', (req, res) => {
  db.Spending.create({
    userId: req.params.userid,
    date: req.body.date,
    category: 'income',
    amount: -Math.abs(req.body.amount),
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
