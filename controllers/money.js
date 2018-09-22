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
// findById(req.user.id)

router.post('/all', (req, res) => {
  db.Spending.find({ userId: req.user.id, category: 'income' })
  .then(spendings => {
      res.send(spendings);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

// router.post('/all', (req, res) => {
//
//   let data = req.body.body
//   db.Spending.create({
//     date: data.date,
//     category: 'income',
//     amount: data.amount,
//     description: data.description,
//     userId: data.userId
//
//   })
//   .then(result => {
//     res.send('success');
//   })
//   .catch(err => {
//     console.log(err);
//     res.send('error, check your logs');
//   });
// });

module.exports = router;
