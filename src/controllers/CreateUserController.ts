import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  // eslint-disable-next-line class-methods-use-this
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const { name } = req.body;
    const { email } = req.body;
    const id = uuid();

    if (name.length === 0) {
      return res.status(400).json({ message: 'Fill in all the fields' });
    }

    const user = await createUserService.execute({ id, name, email });

    return res.status(200).json({ user });
  }
}

export { CreateUserController };
