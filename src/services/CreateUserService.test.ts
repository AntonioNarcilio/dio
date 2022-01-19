/* eslint-disable no-undef */
import { getConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';
import createConnection from '../database';
import { CreateUserService } from './CreateUserService';

describe('CreateUserService', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM users');
    await connection.close();
  });

  it('Deve retornar o id do usuário criado', async () => {
    const createUserService = new CreateUserService();
    const result = await createUserService.execute({
      id: uuid(),
      name: 'Algum Usuário',
      email: 'email@email.com',
    });

    expect(result).toHaveProperty('id');
  });
});
