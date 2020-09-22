import express from 'express';
import { cards } from './data';
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

app.listen(PORT, () => console.log('server'));
