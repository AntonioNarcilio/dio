import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

router.get('/v1/', (request: Request, response: Response) => {
  response.json({
    message: 'Meu server Express, com Typescript!',
  });
});

router.post('/v1/users', createUserController.handle);
router.get('/v1/users', getAllUserController.handle);

export { router };
