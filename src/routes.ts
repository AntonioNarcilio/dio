import { Router } from 'express';

const ROUTER = Router();

ROUTER.get('/', (req, res) => res.sendFile(
  `${__dirname}/views/index.html`,
));

export default ROUTER;
