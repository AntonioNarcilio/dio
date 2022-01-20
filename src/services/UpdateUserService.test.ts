/* eslint-disable no-undef */
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { UpdateUserService } from './UpdateUserService';
import { FakeData } from '../utils/fakeData/fakeData';

describe('UpdateUserService', () => {
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

  it('Deve editar o nome do usuário', async () => {
    const mockUser = await fakeData.createUser();
    const updateUserService = new UpdateUserService();

    const result = await updateUserService.execute({
      id: mockUser.id,
      name: 'Outro usuário',
      // email: mockUser.email,
    });

    expect(result).toHaveLength(0);
  });
});
