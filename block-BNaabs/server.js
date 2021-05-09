let express = require('express');

let app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.send('Hey my name is ' + req.body.name);
});

app.get('/users/:var', (req, res) => {
  res.send(req.params.var);
});

app.listen(3000, () => {
  console.log('Server is up and running at 3000');
});
