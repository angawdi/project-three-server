const express = require('express');
const router = express.Router();
const db = require('../models');


router.post('/', (req, res) => {
  console.log('USER', req.user)
  db.User.findById(req.user.id)
  .then(budget => {
    console.log('hello ===> budget', budget)
   res.send(budget.spendingCategory);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

router.post('/update', (req, res) => {
  req.body = req.body.body
  console.log('BODY:', req.body);
  console.log('USER', req.user)
  db.User.findOneAndUpdate({_id: req.user.id}, {spendingCategory: req.body})
  .then(result => {
    console.log('RESULT', result)
    res.send('success');
  })
  .catch(err => {
    console.log(err);
    res.send('error, check your logs');
  });
});


module.exports = router;
