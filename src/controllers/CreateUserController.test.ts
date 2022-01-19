/* eslint-disable no-undef */
import { CreateUserController } from './CreateUserController';

describe('CreateUserController', () => {

  it('Deve retornar o id do usuário criado', async () => {
    const createUserController = new CreateUserController();
    const result = createUserController.handle()


});
