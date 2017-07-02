const express = require('express');
const mustache = require('mustache-express');
const parseurl = require('parseurl')
const bodyParser = require('body-parser');
const validator = require('express-validator')
const sequelize = require('sequelize');
const models = require('./models')
const faker = require('faker');
const pg = require('pg');
const session = require('express-session');
const app = express();

app.engine('mustache', mustache())
app.set('view engine', 'mustache');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, function(){
  console.log("Looking good!")
})


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

///////////////////////////TODO homepage TODO////////////////////////

// for (let i = 0; i < 5; i++) {
//   const user = models.User.build({
//     username: faker.internet.userName(),
//     name: faker.name.firstName(),
//     email: faker.internet.email(),
//     password: faker.internet.color()
//   })
//   user.save();
// }


var sess

app.get('/', function (req, res) {
  sess = req.session
  if (sess.username) {
    models.Gab.findAll().then( function(gabs){
      res.render('gabble', {
        username: sess.username,
        gabs: gabs
      })
    })

  }
  else {
    res.redirect('/login')
  }
})



///////////////////////////TODO login TODO////////////////////////

app.get('/login', function(req, res) {
  return res.render('login')
})

app.post('/login', function (req, res) {
  sess = req.session

  let postUser = req.body.username;
  let postPass = req.body.password;

  const user = models.User.findOne({
    where: {
      username: postUser,
      password: postPass
    }
  }).then( function (user) {
    if (user) {
      sess.username = user.username
      sess.password = user.password
      return res.redirect('/' )
    } else {
      return res.redirect('/login')
    }
  })
})

///////////////////////////TODO signup TODO////////////////////////

app.get('/signup', function (req, res) {
  return res.render('signup')
})

app.post('/signup', function (req, res) {
  let newUser = req.body.username;
  let newPass = req.body.password
  let newPassConfirm = req.body.passwordConfirm

  if (newPass === newPassConfirm) {
    let user = models.User.build({

        username: newUser,
        password: newPass

    })
    user.save()
    .then( function(user){
      sess = req.session
      sess.username = user.username
      sess.password = user.password
      return res.redirect('/')

    })
  } else {
    return res.redirect('/signup')
  }
})

///////////////////////////TODO create a new gab TODO////////////////////////

app.get('/create', function(req, res){
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

app.post('/create', function(req, res){
  const gab = models.Gab.build({
    messages: req.body.createArea
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

///////////////////////////TODO logout TODO////////////////////////
app.post('/logout', function(req, res) {
  sess = req.session
  // req.session.username = {};
  sess.username = ''


  return res.redirect('/login')
})
