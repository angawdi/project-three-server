const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.User.find()
  .then(budget => {
      res.send(user.spendingCategory);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

router.post('/add', (req, res) => {
  db.User.findOneAndUpdate({_id: userid}, {$push: {spendingCategory: {name: req.body.category, amount: req.body.amount}}
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
