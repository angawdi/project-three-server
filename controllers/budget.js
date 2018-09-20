const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
  db.User.find()
  .then(budget => {
   res.send(budget[0].spendingCategory);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

router.post('/', (req, res) => {

  db.User.findOneAndUpdate({_id: req.body.userId}, {spendingCategory:
      {
        housingBudget: req.body.housingBudget,
        foodBudget: req.body.foodBudget,
        transportationBudget: req.body.transportationBudget,
        entertainmentBudget: req.body.entertainmentBudget,
        shoppingBudget: req.body.shoppingBudget,
        savingsBudget: req.body.savingsBudget
    }
  })
  .then(result => {
    res.send('success');
    console.log(req.body);
  })
  .catch(err => {
    console.log(err);

    
    res.send('error, check your logs');
  });
});


module.exports = router;
