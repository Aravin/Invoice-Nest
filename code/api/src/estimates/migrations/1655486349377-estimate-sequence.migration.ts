import { MigrationInterface, QueryRunner } from 'typeorm';

export class EstimateSequenceNumber1655486349377 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS estimate_number_seq;`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SEQUENCE IF EXISTS estimate_number_seq;`); // reverts things made in "up" method
  }
}
