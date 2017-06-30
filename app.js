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
  saveUninitialized: true,
  cookie: { secure: true }
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

let sess

app.get('/', function (req, res) {
  if (sess) {
    res.render('gabble')
  }
  else {
    res.redirect('/login')
  }
})



///////////////////////////TODO login TODO////////////////////////

app.get('/login', function(req, res) {
  res.render('login')
})

app.post('/login', function (req, res) {

  let postUser = req.body.username;
  let postPass = req.body.password;

  const user = models.User.findAll({
    where: {
      username: postUser,
      password: postPass
    }
  }).then( function (user) {
    for (let i = 0; i < user.length; i++) {
      if (user[i].username === postUser && user[i].password === postPass) {
        sess = req.session
        console.log("session" + sess)
        res.redirect('/')
      } else {
        res.redirect('/login')
      }
    }

  })
})

///////////////////////////TODO signup TODO////////////////////////

app.get('/signup', function (req, res) {
  res.render('signup')
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
      res.redirect('/')

    })
  } else {
    res.redirect('/signup')
  }
})

///////////////////////////TODO create a new gab TODO////////////////////////
