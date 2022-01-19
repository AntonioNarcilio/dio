import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1642550782476 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'string',
            isNullable: true,
          },
        ],
      }),
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
