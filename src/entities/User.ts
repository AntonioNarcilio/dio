import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn('id')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}

export { User };
