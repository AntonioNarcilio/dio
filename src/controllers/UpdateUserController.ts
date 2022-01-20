/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const updateUserService = new UpdateUserService();
    const { id, name, email } = request.body;

    if (id.length === 0) {
      return response.status(400).json({ message: 'ID não informado' });
    }

    if (name.length === 0) {
      return response.status(400).json({ message: 'Informe o nome' });
    }

    await updateUserService.execute({ id, name, email });

    return response.status(204);
  }
}

export { UpdateUserController };
