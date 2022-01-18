import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/v1/', (request: Request, response: Response) => {
  response.json({
    message: 'Meu server Express, com Typescript!',
  });
});

router.get('/v1/users', createUserController.handle);

export { router };
