let express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.end('From Server');
});

app.listen(3000, () => {
  console.log('Server is up at 3000');
});
