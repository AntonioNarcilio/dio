import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  // eslint-disable-next-line class-methods-use-this
  handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const { name } = req.body;
    const { email } = req.body;

    if (name.length === 0 || email.length === 0) {
      return res.status(400).json({ message: 'Fill in all the fields' });
    }

    const user = createUserService.execute({ name, email });

    return res.status(200).json({ user });
  }
}

export { CreateUserController };
