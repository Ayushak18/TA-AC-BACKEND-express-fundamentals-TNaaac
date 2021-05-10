let express = require('express');

let app = express();

app.use('/admin', (req, res, next) => {
  next('Error form admin route');
});

app.get('/', (req, res) => {
  res.send('From index route');
});

app.get('/about', (req, res) => {
  res.send('From about route');
});

app.use((req, res, next) => {
  res.send('Page not found');
  next();
});

app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(3000, () => {
  console.log('Server is up and running');
});
