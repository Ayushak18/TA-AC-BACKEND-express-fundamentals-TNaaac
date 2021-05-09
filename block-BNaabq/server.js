let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Mounting express in app
let app = express();

// Using morgan
app.use(logger('dev'));

// Using cookieParser
app.use(cookieParser());

// Middleware for making cookie
function cookieMaker(req, res, next) {
  res.cookie('username', 'Ayush Kamboj');
  next();
}

function cookieFetch(req, res, next) {
  let username = req.cookies.username;
  console.log(username);
  next();
}

app.use('/about', cookieMaker);

app.use(cookieFetch);

app.get('/', (req, res) => {
  res.send('From index route');
});

app.get('/about', (req, res) => {
  console.log('about', req.cookies);
  res.send('From about route');
});

app.listen(3000, () => {
  console.log('Server is up and running at 3000');
});
