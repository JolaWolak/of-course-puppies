const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/puppies', require('./puppy'));

app.listen(8080, () => console.log('Server on 8080!'));