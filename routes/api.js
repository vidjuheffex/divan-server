var express = require('express');
var router = express.Router();
const models = require('../models');

router.use(require('../middlewares/userAuth.js'));

router.get('/globalSettings', function(req, res, next) {
  return res.send(JSON.stringify({msg: "success", globalSettings: req.app.settings.globalSettings}));
});

module.exports = router;
