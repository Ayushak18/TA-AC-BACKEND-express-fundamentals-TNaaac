let express = require('express');

let app = express();

function newMiddle(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(newMiddle);

app.get('/', (req, res) => {
  res.send('From Server');
});

app.listen(4000, () => {
  console.log('Server is up and runnig at 4000');
});
