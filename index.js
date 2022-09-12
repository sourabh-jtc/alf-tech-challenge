import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

const CONNECTION_URL = `mongodb+srv://alf-tech:alftech4097@mern.n1t5a.mongodb.net/challenge?retryWrites=true&w=majority`;

const PORT = 5000;

await mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App started listening on port ${PORT}`),
    );
  })
  .catch((e) => {
    console.log(e.message);
  });
