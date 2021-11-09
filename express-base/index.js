const express = require('express');
const app = express();
const port = 3000;

const { usersGet, userPost, userPut, userDel } = require('./controllers/users');

app.use(express.json());

app.get('/users', usersGet);

app.post('/users', userPost);

app.get('/user/:cc', (req, res) => {
  res.send('Hello get cc!')
});

app.put('/user/:cc', userPut);

app.delete('/user/:cc', userDel);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
