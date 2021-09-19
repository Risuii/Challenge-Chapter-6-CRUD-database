const express = require("express");
const posts = require("./db/login.json");
// kode diatas di pakai untuk ngecek data yang dimasukan itu, ada atau tidak di dalam file login.json
const app = express();
const { User_game,User_game_biodata,User_game_history } = require('./models');
const port = 3000;

// middleWare

app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// template engine

app.set('view engine', 'ejs');

// handler

function homePage(req, res) {
  return res.render("layout/index.ejs");
}

function gamesPage(req, res) {
  return res.render("layout/games.ejs");
}

function login(req, res) {
  const post = posts.find((item) => {
    return item.email == req.body.email;
  });
  if (req.body.password == post.password) {
    return res.redirect("/database");
  }
  if (req.body.password != post.password) {
    res.redirect("/");
  }
}

// Database

app.get('/database', (req, res) => {
  User_game.findAll()
  .then(database => {
    res.render('database/database', {
      database
    })
  })
})

// Create

app.get('/database/create', (req, res) => {
  res.render('create/create')
} );

app.post('/database/create', (req, res) => {
  User_game.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(() => {
    User_game_biodata.create({
      id_user: req.body.id_user,
      name: req.body.name,
      age: req.body.age
    })
    .then(() => {
      res.render('create/berhasilCreate')
    })
  })
})

// Read

app.get('/database/:id', (req, res) => {
  User_game.findOne({ where: { id: req.params.id }})
  .then((read) => {
    User_game_biodata.findOne({ where: { id_user: req.params.id}})
    .then((reads) => {
      res.render('read/read', {read,reads})
    })
  })
})

// Update

app.get('/database/update/:id', (req, res) => {
  User_game.findOne({ where: { id: req.params.id } })
  .then((update) => {
    User_game_biodata.findOne({ where: { id_user: req.params.id }})
    .then((updates) => {
      res.render('update/update', {update,updates})
    }) 
  })
})



app.post('/database/update/:id', (req, res) => {
  User_game.update({
    username: req.body.username,
    password: req.body.password
  },
  { where: { id: req.params.id } }
  ).then(() => {
    User_game_biodata.update({
      name: req.body.name,
      age: req.body.age
    }, { where: { id_user: req.params.id } })
    .then(() => {
      res.render('update/berhasilUpdate')
    })
  })

})

// Delete


app.get('/database/delete/:id', (req, res) => {
  User_game_biodata.destroy({ where: { id_user: req.params.id } })
  .then(() => {
    User_game.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.render('delete/delete')
    })
  } )
})



// ^ ini untuk mengatur sistem loginnya,
// ^ variabel "post" di situ untuk menyimpan hasil pencarian dari kode posts.find(item)
// ^ posts disini merupakan variabel dari line nomor 3
// cara memanggil password atau email yang ada di file login.json maka, harus dipakaikan variabel post lalu tambahkan "titik" dan nama keynya

// route

app.post("/login", login);
app.get("/games", gamesPage);
app.get("/", homePage);
app.listen(port);
