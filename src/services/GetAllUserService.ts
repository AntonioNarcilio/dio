/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class GetAllUserService {
  async execute() {
    const users = await getRepository(User)
      .createQueryBuilder('users')
      .getMany();

    console.log(users);
    return users;
  }
}

export { GetAllUserService };
