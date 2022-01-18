import { Router, Request, Response } from 'express';

const router = Router();

router.get('/v1/', (request: Request, response: Response) => {
  response.json({
    message: 'Meu server Express, com Typescript!',
  });
});

export { router };
