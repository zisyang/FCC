var express = require('express');
var router = express.Router();
var users = require('../models/users.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/new_user', function(req,res,next){
  console.log("making new user")
  users.createUser(req,res,next)
})


router.post('/login_user', function(req,res,next){
  users.logInUser(req,res,next)
})

router.get('/sign_out', function(req,res,next){
  users.signOutUser(req,res,next)
}) 

module.exports = router;
