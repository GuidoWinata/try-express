const express = require('express');
const dotenv = require('dotenv');
const client = require('./client');
const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;
const router = express.Router();

router.get('/api', (req, res) => {
  res.send('Hello World');
});

router.get('/barang', async (req, res) => {
  const barang = await client.barang.findMany();
  res.json(barang);
});

router.post('/create', async (req, res) => {
  try {
    const barang = req.body;

    await client.barang.create({
      data: {
        nama: barang.nama,
        harga: barang.harga,
        jenis: barang.jenis,
        deskripsi: barang.jenis,
      },
    });
  } catch (error) {
    console.error();
  }
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log('server listen to PORT:', PORT);
});
