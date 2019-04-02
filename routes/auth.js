const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Admin = require('../models/Admin');

const { isLoggedIn, isNotLoggedIn, validationLoggin } = require('../helpers/middlewares');

router.get('/me', isLoggedIn(), (req, res, next) => {
  res.json(req.session.currentUser);
});

router.post('/login', isNotLoggedIn(), validationLoggin(), (req, res, next) => {
  const { username, password } = req.body;

  Admin.findOne({
    username
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          error:true,
          code:"User does not exist"
        })
        
      }
      if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        return res.status(200).json(user);
      } else {
        return res.status(401).json({
          error:true,
          code:"Incorrect password"
        })
      }
    })
    .catch(next);
});

router.post('/signup', isNotLoggedIn(), validationLoggin(), (req, res, next) => {
  const { username, password, phone, email, company, address } = req.body;

  Admin.findOne({
    username
  }, 'username')
    .then((userExists) => {
      if (userExists) {
        return res.status(422).json({
          error:true,
          code:"Username already in use"
        })
      } else {

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const newAdmin = new Admin({
          username,
          password: hashPass,
          phone,
          company,
          email,
          address
        });
        return newAdmin.save().then(() => {
          // TODO delete password 
          req.session.currentUser = newAdmin;
          res.status(200).json(newAdmin);
        });
      }
    })
    .catch(next);
});

router.post('/logout', isLoggedIn(), (req, res, next) => {
  req.session.destroy();
  return res.status(204).send();
});


module.exports = router;
