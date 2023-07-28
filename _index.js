const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is home page. printer');

});

app.listen(3000, () => {
  console.log('listening to port 3000');
});