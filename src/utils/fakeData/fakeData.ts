import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../../services/CreateUserService';

class FakeData {
  createUserService = new CreateUserService();

  async execute() {
    await this.createUserService.execute({
      id: uuid(),
      name: 'Algum usuário',
      email: 'email@email.com',
    });

    await this.createUserService.execute({
      id: uuid(),
      name: 'Outro usuário',
      email: '',
    });
  }

  async createUser() {
    const user = await this.createUserService.execute({
      id: uuid(),
      name: 'Algum usuário',
      email: 'email@email.com',
    });

    return user;
  }
}

export { FakeData };
