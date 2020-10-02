import express from 'express';
import { cards } from './data';
import { cart } from './data';
import { bestProducts } from './data';
import { womenProducts } from './data';

const PORT = 9000;

const app = express();

app.get('/api/cards', (req, res) => {
  res.send(cards);
});

app.get('/api/best-products', (req, res) => {
  res.send(bestProducts);
});

app.get('/api/women-products', (req, res) => {
  res.send(womenProducts);
});

app.get('/api/carts', (req, res) => {
  res.send(cart);
});

app.get('/api/product/:id', (req, res) => {
  const productId = req.params.id;
  const womenProduct = womenProducts.find((x) => x.id === Number(productId));
  const bestProduct = bestProducts.find((x) => x.id === Number(productId));
  if (womenProduct) {
    res.send(womenProduct);
  } else if (bestProduct) {
    res.send(bestProduct);
  } else {
    res.status(404).send({ msg: 'Product Not Found' });
  }
});

app.listen(PORT, () => console.log('server run'));
