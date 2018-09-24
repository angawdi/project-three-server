const express = require('express');
const router = express.Router();
const db = require('../models');


router.post('/post', (req, res) => {

  db.Spending.find({ 'userId': req.user.id,
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

  let data = req.body.body

  db.Spending.create({

    date: data.date,
    amount: data.amount,
    description: data.description,
    category: data.category,
    userId: req.user.id

  })
  .then(result => {
    res.send('success');
  })
  .catch(err => {
    console.log(err);
    res.send('error, check your logs');
  });
});

router.post('/delete', (req, res) => {
  console.log("backend", req.body.body)
  db.Spending.findByIdAndDelete(req.body.body)
  .then(result => {
      res.send('success');
  })
  .catch(err => {
    console.log(err);
    res.send('err');
  });
});


module.exports = router;
