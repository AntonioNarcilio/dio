import express from 'express';
import colors from 'colors';
import { router } from './routes';
import createConnection from './database';
import 'reflect-metadata';
import 'dotenv/config';

createConnection();
const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT ?? 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    colors.green('\nServer running on the port 🚪:'),
    colors.yellow(`${PORT}`),
  );
});
