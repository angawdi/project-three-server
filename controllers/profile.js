const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
	console.log("profile route!!")
   db.User.find()
 .then(info => {
   res.send(info[0].spendingCategory);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});


module.exports = router;

