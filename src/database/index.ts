import { Connection, createConnection, getConnection } from 'typeorm';

export default async ():Promise<Connection> => {
  const defaultConnection = await getConnection();

  return createConnection(
    Object.assign(defaultConnection),
  );
};
