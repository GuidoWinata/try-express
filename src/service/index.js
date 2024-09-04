const express = require('express');
const dotenv = require('dotenv');
const client = require('./client');
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/barang', async (req, res) => {
  const barang = await client.barang.findMany();
  res.json(barang);
});
app.listen(PORT, () => {
  console.log('server listen to PORT:', PORT);
});
