import express from 'express';
import colors from 'colors';
import 'dotenv/config';

const APP = express();
let PORT = process.env.PORT ?? 3333;

APP.get('/v1/', (request, response) => {
  response.json({
    message: 'Meu server Express, com Typescript!',
  });
});

APP.listen(PORT, () => {
  console.log(
    colors.green('\nServer running on the port 🚪:'),
    colors.yellow(`${PORT}`),
  );
});
