/* eslint-disable no-undef */
import { getConnection } from 'typeorm';
import { Request } from 'express';
import createConnection from '../database';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { UpdateUserController } from './UpdateUserController';
import { FakeData } from '../utils/fakeData/fakeData';

describe('UpdateUserController', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM users');
    await connection.close();
  });

  const fakeData = new FakeData();

  it('Deve retornar status 204 quando usuário for editado.', async () => {
    const mockUser = await fakeData.createUser();
    const updateUserController = new UpdateUserController();
    const request = {
      body: {
        id: mockUser.id,
        name: 'Outro nome',
        email: 'nome@gmail.com',
      },
    } as Request;
    const response = makeMockResponse();
    await updateUserController.handle(request, response);
    expect(response.state.status).toBe(204);
  });

  it('Deve retornar o status 400 caso o id não seja informado.', async () => {
    const updateUserController = new UpdateUserController();
    const request = {
      body: {
        id: '',
        name: 'Outro nome',
        email: 'nome@gmail.com',
      },
    } as Request;
    const response = makeMockResponse();
    await updateUserController.handle(request, response);
    expect(response.state.status).toBe(400);
  });
  it('Deve retornar o status 400 caso o nome não seja informado.', async () => {
    const mockUser = await fakeData.createUser();
    const updateUserController = new UpdateUserController();
    const request = {
      body: {
        id: mockUser.id,
        name: '',
        email: 'nome@gmail.com',
      },
    } as Request;
    const response = makeMockResponse();
    await updateUserController.handle(request, response);
    expect(response.state.status).toBe(400);
  });
});
