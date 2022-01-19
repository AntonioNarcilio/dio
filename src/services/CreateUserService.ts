import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface UserProps {
  id: string;
  name: string;
  email?: string;
}

class CreateUserService {
  // eslint-disable-next-line class-methods-use-this
  async execute({ id, name, email }:UserProps) {
    const user = await getRepository(User)
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        id,
        name,
        email,
      })
      .execute();
    console.log(user);
    return user;
  }
}

export { CreateUserService };
