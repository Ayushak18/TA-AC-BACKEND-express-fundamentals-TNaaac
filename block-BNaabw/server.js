let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/About-Us', (req, res) => {
  res.sendFile(__dirname + '/About-Us.html');
});
app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/services.html');
});

app.use((req, res) => {
  res.send('Error 404');
});

app.listen(4000, () => {
  console.log('Server is up and running at 4000');
});
