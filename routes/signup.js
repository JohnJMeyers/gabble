const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.get('/signup', function (req, res) {
  return res.render('signup')
})

router.post('/signup', function (req, res) {
  let newUser = req.body.username;
  let newPass = req.body.password
  let newPassConfirm = req.body.passwordConfirm

  if (newPass === newPassConfirm) {

    models.User.findOrCreate({
      where: {
        username: newUser,
      }
    }).spread(function(user, wasCreated){
      if (wasCreated){
        sess = req.session
       sess.username = user.username
       sess.password = user.password
       return res.redirect('/')
     } else {
       return res.redirect('/signup')
     }
   }).catch(function(err){
     console.log(err)
     req.checkBody('post')
     return res.redirect('/signup')
   })

  //   user.save()
  //   .then( function(user){
  //     sess = req.session
  //     sess.username = user.username
  //     sess.password = user.password
  //     return res.redirect('/')
  //
  //   })
  // } else {
  //   return res.redirect('/signup')
  // }
// })
}})
module.exports = router
