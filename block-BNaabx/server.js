let express = require('express');

let app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('From index route');
});

app.listen(5000, () => {
  console.log('Server is up and running');
});
