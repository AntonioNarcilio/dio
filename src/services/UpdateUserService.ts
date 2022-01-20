import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface UserProps {
  id: string;
  name: string;
  email?: string;
}

class UpdateUserService {
  // eslint-disable-next-line class-methods-use-this
  async execute({ id, name, email }: UserProps) {
    const user = await getRepository(User)
      .createQueryBuilder()
      .update()
      .set({
        name,
        email,
      })
      .where('id = :id', { id })
      .execute();
    // console.log(user);
    return user.raw;
  }
}

export { UpdateUserService };
