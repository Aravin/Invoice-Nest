import { MigrationInterface, QueryRunner } from 'typeorm';

export class InvoiceSequenceNumber1655486349376 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS invoice_number_seq;`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SEQUENCE IF EXISTS invoice_number_seq;`); // reverts things made in "up" method
  }
}
