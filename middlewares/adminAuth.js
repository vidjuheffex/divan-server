var jwt = require('jsonwebtoken');
var config = require('../config/jwtconfig.js');

var auth = function(req, res, next) {
  var token = req.body.token || req.headers['x-access-token'];
  if (token) {
   return jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
         console.error('Verification Error', err);
         return res.status(401).send(err);
      } else {
        console.log(decoded.user.id);
        if (decoded.user.role === 'admin'){
          req.user = decoded.user;
         return next();          
        }
        else {
          return res.send("error");
        }
      }
   });
  } else {
    return res.redirect(401, '/');
   }
};

module.exports = auth;
