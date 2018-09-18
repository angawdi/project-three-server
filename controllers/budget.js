const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
  db.User.find()
  .then(budget => {
    console.log("FOUND BUDGET", budget[0].email);
   res.send(budget[0].spendingCategory);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

router.post('/', (req, res) => {
  //console.log("BUDGET.JS REQ.BODY", req.body);
  // db.User.findOneAndUpdate({_id: req.body.userId}, {$push: {spendingCategory: {name: req.body.name, amount: req.body.amount}}
  // })
  // .then(result => {
  //   res.send('success');
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.send('error, check your logs');
  // });
  db.User.findOneAndUpdate({_id: req.body.userId}, {spendingCategory: 
      {
        housingBudget: req.body.housingBudget,
        foodBudget: req.body.foodBudget,
        transportationBudget: req.body.transportationBudget,
        entertainmentBudget: req.body.entertainmentBudget,
        shoppingBudget: req.body.shoppingBudget
    }
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
