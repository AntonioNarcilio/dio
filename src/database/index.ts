import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async ():Promise<Connection> => {
  const defaultConnection = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultConnection),
  );
};
