let express = require('express');

let app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
  res.send('Server');
});

app.post('/json', (req, res) => {
  console.log(req.body);
});

app.post('/contact', () => {
  console.log(req.body);
});

// app.get("/img",(req,res)=>{
//     res.readFile()
// })

app.listen(3000, () => {
  console.log('Server is up and running');
});
