const express = require('express');
const router = express.Router();
const db = require('../models');



// router.get('/all', (req, res) => {
//   db.Spending.find({ 'userId': '5ba2c6d1ea120ee07e8c33aa', 'category': 'income'
//   })
//   .then(spendings => {
//       res.send(spendings);
//
//   })
//   .catch(err => {
//     console.log(err);
//     res.send(err);
//   });
// });

router.post('/all/post', (req, res) => {
  console.log('req.body=====', req.body)
  db.Spending.find({ 'userId': req.body.id,
    "category": "income"
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
