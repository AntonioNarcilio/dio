/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { GetAllUserService } from '../services/GetAllUserService';
import { DeleteUserService } from '../services/DeleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService();
    const getAllUserService = new GetAllUserService();

    const { id } = req.params;
    const users = await getAllUserService.execute();

    if (id === undefined || id === '' || id === null) {
      return res.status(400).json({ message: 'Informe o ID na rota.' });
    }

    let status = 0;
    await Promise.all(users.map(async (user) => {
      if (user.id === id) {
        await deleteUserService.execute({ id });
        status = 204;
      }
      return status;
    }));

    if (status !== 204) {
      return res.status(404).json({ message: 'Id informado não existe.' });
    }

    return res.status(status).json();
  }
}

export { DeleteUserController };
