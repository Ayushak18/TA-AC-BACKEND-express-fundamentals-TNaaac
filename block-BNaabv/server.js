let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use('/error', (req, res, next) => {
  next('You are in the error handler');
});

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function cookieCreate(req, res, next) {
  res.cookie('Cookie', 'ChocoChip');
  next();
}

app.use(cookieCreate);

app.get('/', (req, res) => {
  res.send('<h2>Welcome to Express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.get('/users/:username', (req, res) => {
  res.send(`<h1>Username form page is ${req.params.username}</h1>`);
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.use((req, res, next) => {
  res.send('<h1>Error 404</h1>');
  next();
});

app.use((error, req, res, next) => {
  req.statusCode = '500';
  res.send(error);
});

app.listen(3000, () => {
  console.log('Server is up');
});
