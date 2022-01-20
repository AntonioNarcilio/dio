import { Request, Response } from 'express';
import { GetAllUserService } from '../services/GetAllUserService';

class GetAllUserController {
  // eslint-disable-next-line class-methods-use-this
  async handle(req: Request, res: Response) {
    const getAllUserService = new GetAllUserService();
    const users = await getAllUserService.execute();
    return res.status(200).json(users);
  }
}

export { GetAllUserController };
