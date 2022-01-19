/* eslint-disable no-undef */
import { getConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';
import createConnection from '../database';
import { GetAllUserService } from './GetAllUserService';
import { CreateUserService } from './CreateUserService';

describe('GetAllUserService', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM users');
    await connection.close();
  });

  const createService = new CreateUserService();

  it('Deve retornar todos os usuários cadastrados', async () => {
    await createService.execute({
      id: uuid(),
      name: 'Algum usuário',
      email: 'email@email.com',
    });

    await createService.execute({
      id: uuid(),
      name: 'Outro usuário',
      email: '',
    });
    const expectedResponse = [
      {
        name: 'Algum usuário',
        email: 'email@email.com',
      },
      {
        name: 'Outro usuário',
        email: '',
      },
    ];

    const getAllUserService = new GetAllUserService();
    const result = await getAllUserService.execute();
    expect(result).toMatchObject(expectedResponse);
  });
});
