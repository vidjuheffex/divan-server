var express = require('express');
var router = express.Router();
const models = require('../models');
var pass = require('pwd');

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("Sent");
});

router.post("/signup", (req,res) => {
  let {username, email, password, first_name, last_name} = req.body;
  let role="admin";
  pass.hash(password)
    .then(function(result){
      let salt = result.salt;
      let hash = result.hash;
      models.User.build({
        username,
        hash,
        salt,
        email,
        first_name,
        last_name,
        role
      })
        .save()
        .then( task => {
          return res.send({"msg": "success"});
        })
        .catch( err => {
          return res.send({"msg": err});
        });
    });
});

router.post("/login", (req,res) => {
  let {email, password} = req.body;
  models.User.findOne({
    where: {       
      email: req.body.email
    }
  }).then( user => {
    pass.hash(password ,user.salt)
      .then(function(result){
        let hash = result.hash;
        if(user.hash === hash){
          return res.send({"msg": "success"});
        } else {
          return res.send({"msg": "failure"});
        }
      });
  });
});

module.exports = router;
