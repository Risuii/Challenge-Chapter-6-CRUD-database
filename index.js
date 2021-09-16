const express = require("express");
const posts = require("./db/login.json");
// kode diatas di pakai untuk ngecek data yang dimasukan itu, ada atau tidak di dalam file login.json
const app = express();
const { Article } = require('./models');
const port = 3000;

// middleWare

app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// handler

function homePage(req, res) {
  return res.render("index.ejs");
}

function gamesPage(req, res) {
  return res.render("games.ejs");
}

function login(req, res) {
  const post = posts.find((item) => {
    return item.email == req.body.email;
  });
  if (req.body.password == post.password) {
    return res.redirect("/games");
  }
  if (req.body.password != post.password) {
    res.redirect("/");
  }
}

app.post('/signup', (req, res) => {
  Article.create({
    email: req.body.e-mail,
    password: req.body.password
  }).then(article => {
    res.redirect("/");
  })
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
