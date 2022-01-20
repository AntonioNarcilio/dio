/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService();
    const { id } = req.params;

    if (id === undefined || id === '') {
      return res.status(400).json({ message: 'Informe o ID na rota' });
    }

    await deleteUserService.execute({ id });
    return res.status(204).json();
  }
}

export { DeleteUserController };
