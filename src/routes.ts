import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();

router.get('/v1/', (request: Request, response: Response) => {
  response.json({
    message: 'Meu server Express, com Typescript!',
  });
});

router.post('/v1/users', createUserController.handle);
router.get('/v1/users', getAllUserController.handle);
router.patch('/v1/user', updateUserController.handle);

export { router };
