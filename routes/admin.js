var express = require('express');
var router = express.Router();
const models = require('../models');

router.use(require('../middlewares/adminAuth.js'));

router.post('/project', function(req, res, next){
  let {name, fsname, hrez, vrez, fps} = req.body;
  console.log(req.body);
  console.log(name, fsname, hrez, vrez, fps);
  console.log(req.user.id);
  models.Project.build({
    name,
    fsname,
    hrez: parseInt(hrez),
    vrez: parseInt(vrez),
    fps: parseFloat(fps),
    creatorid: req.user.id
  })
    .save()
    .then( task => {
      return res.send({"msg": "success"});
    })
    .catch( err => {
      return res.send({"msg": err});
    });
});

module.exports = router;
