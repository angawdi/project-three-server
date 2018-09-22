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


// The "todo" in this callback function represents the document that was found.
// It allows you to pass a reference back to the client in case they need a reference for some reason.
// router.delete('/delete', (req, res) => {
//   console.log('stuffff======>', req.body.id)
//   db.Spending.findByIdAndRemove('id': req.body.id, (err, spending) => {
//
//     if (err) return res.status(500).send(err);
//
//     return res.status(200).send(response);
// });
//
// })

module.exports = router;
