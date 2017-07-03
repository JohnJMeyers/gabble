const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.get('/create', function(req, res){
  // return res.render('create', {
  //   username: sess.username
  // })
  sess = req.session
  if (sess.username) {
    return res.render('create', {
      username: sess.username

    })
  }
  else {
    return res.redirect('/login')
  }
})

router.post('/create', function(req, res){
  sess = req.session
  const gab = models.Gab.build({
    messages: req.body.createArea,
    user_id: sess.username
  })

  gab.save()
    .then(function(){
      res.redirect("/")
    })
    .catch(function(bigErrorThing){

      res.render("create", {
        gab: gab,
        errors: bigErrorThing.errors
      })
    })
})


module.exports = router
