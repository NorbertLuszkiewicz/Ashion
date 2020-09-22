import express from 'express';
import { cards } from './data';
import { bestProducts } from './data';
import { womenProducts } from './data';

const PORT = 9000;

const app = express();

app.get('/api/cards', (res, req) => {
  res.setEncoding(cards);
});

app.get('/api/best-products', (res, req) => {
  res.setEncoding(bestProducts);
});

app.get('/api/women-products', (res, req) => {
  res.setEncoding(womenProducts);
});

app.listen(PORT, () => console.log('server'));
