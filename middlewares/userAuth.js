var jwt = require('jsonwebtoken');
var config = require('../config/jwtconfig.js');

var auth = function(req, res, next) {
  var token = req.body.token || req.headers['x-access-token'];
  console.log('TOKEN: ', token);
  if (token) {
   return jwt.verify(token, config.secret, function(err, user) {
      if (err) {
         console.error('Verification Error', err);
         return res.status(401).send(err);
      } else {
         req.user = user;
         return next();
      }
   });
  } else {
    // Redirect back to login if token not found.
    return res.redirect(401, '/');
   }
};

module.exports = auth;
