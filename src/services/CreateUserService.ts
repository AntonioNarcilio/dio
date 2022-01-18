interface UserProps {
  name: string;
  email: string;
}

class CreateUserService {
  // eslint-disable-next-line class-methods-use-this
  execute({ name, email }:UserProps) {
    const data = [];

    data.push({ name, email });

    return data;
  }
}

export { CreateUserService };
