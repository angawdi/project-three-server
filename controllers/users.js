const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.User.find()
  .then(users => {
      res.send(users);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});


router.get('/createuser', (req, res) => {
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
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
