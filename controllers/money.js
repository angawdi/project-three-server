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

router.post('/all/post', (req, res) => {

  let data = req.body.body
  db.Spending.create({
    date: data.date,
    category: 'income',
    amount: data.amount,
    description: data.description,
    userId: data.userId

  })
  .then(result => {
    res.send('success');
  })
  .catch(err => {
    console.log(err);
    res.send('error, check your logs');
  });
});

router.delete('/delete', (req, res) => {
  console.log("backend", req)
  db.Spending.findOneAndDelete(req.body.id, (err, item) => {
      // As always, handle any potential errors:
      if (err) return res.status(500).send(err);
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      const response = {
          message: "Todo successfully deleted",
          id: item._id
      };
      return res.status(200).send(response);
  });
})

module.exports = router;
