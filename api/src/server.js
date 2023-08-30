require('dotenv').config({ path: `${__dirname}/.env` });

const express = require('express');
const cors = require('cors');

const connection = require('./config/dbConnection');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/order', orderRoutes);

app.listen(3001, async () => {
  console.log('API listening on port 3001!');
  await connection();
  console.log('Database connection established');
});