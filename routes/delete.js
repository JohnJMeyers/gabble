const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.post('/delete', function(req,res){
  id = req.body.id
  sess = req.session
  models.Gab.findOne({
    where: {
      id: id
    }
  }).then(function(gab){
    gab.destroy().then(function(){
      res.redirect('/')
    })
  })
})
module.exports = router
