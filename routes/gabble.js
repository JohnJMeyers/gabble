const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.get('/', function (req, res) {
  sess = req.session
  if (sess.username) {
    models.Gab.findAll().then( function(gabs){
      res.render('gabble', {
        username: sess.username,
        gabs: gabs
        // .messages,
        // date: gabs.createdAt,
        // likes: gabs.likes
      })
    })

  }
  else {
    res.redirect('/login')
  }
})

module.exports = router
