import express from 'express';
import colors from 'colors';
import router from './routes';

import 'dotenv/config';

const APP = express();
APP.use(router);
APP.use(express.static('public'));

let { PORT } = process.env;

if (PORT == null) {
  PORT = '3333';
}

APP.listen(PORT, () => {
  console.log(
    colors.green('\nServer running on the port 🚪:'),
    colors.yellow(`${PORT}`),
  );
});
