import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface UserProps {
  id: string;
}

class DeleteUserService {
  // eslint-disable-next-line class-methods-use-this
  async execute({ id }: UserProps) {
    const user = await getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();

    // console.log(user);
    return user.raw;
  }
}

export { DeleteUserService };
