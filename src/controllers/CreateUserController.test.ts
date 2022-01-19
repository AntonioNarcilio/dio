/* eslint-disable no-undef */
import { Request } from 'express';
import createConnection from '../database';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { CreateUserController } from './CreateUserController';

describe('CreateUserController', () => {
  it('Deve retornar o id do usuário criado', async () => {
    const connection = await createConnection();
    await connection.runMigrations();

    const createUserController = new CreateUserController();

    const request = {
      body: {
        name: 'Algum usuário',
        email: 'email@email.com',
      },
    } as Request;

    const response = makeMockResponse();

    const result = await createUserController.handle(request, response);

    console.log(result);
  });
});
