/* eslint-disable no-undef */
import { Request } from 'express';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { CreateUserController } from './CreateUserController';

describe('CreateUserController', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    // limpando banco de dados de testes
    await connection.query('DELETE FROM users');
    await connection.close();
  });

  const createUserController = new CreateUserController();
  const response = makeMockResponse();

  it('Deve retornar o status 201 quando o usuário for criado', async () => {
    const request = {
      body: {
        name: 'Algum usuário',
        email: 'email@email.com',
      },
    } as Request;

    await createUserController.handle(request, response);
    expect(response.state.status).toBe(201);
  });

  it('Deve retornar o status 400 quando o nome do usuário não for informado', async () => {
    const request = {
      body: {
        name: '',
        email: 'email@email.com',
      },
    } as Request;

    await createUserController.handle(request, response);
    expect(response.state.status).toBe(400);
  });

  it('Deve retornar o status 201 quando o email não for informado', async () => {
    const request = {
      body: {
        name: 'Algum usuário',
        email: '',
      },
    } as Request;

    await createUserController.handle(request, response);
    expect(response.state.status).toBe(201);
  });
});
