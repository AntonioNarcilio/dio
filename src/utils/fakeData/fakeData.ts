/* eslint-disable class-methods-use-this */
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../../services/CreateUserService';

class FakeData {
  async execute() {
    const createUserService = new CreateUserService();

    await createUserService.execute({
      id: uuid(),
      name: 'Algum usuário',
      email: 'email@email.com',
    });

    await createUserService.execute({
      id: uuid(),
      name: 'Outro usuário',
      email: '',
    });
  }
}

export { FakeData };
