import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603326330291 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // make changes on db
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
      {
        name: 'id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'latitude',
        type: 'decimal',
        scale: 10,
        precision: 12
      },
      {
        name: 'longitude',
        type: 'decimal',
        scale: 10,
        precision: 12
      },
      {
        name: 'about',
        type: 'text',
      },
      {
        name: 'instructions',
        type: 'text',
      },
      {
        name: 'open_on_weekends',
        type: 'boolean',
        default: false,
      }
    ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // undo what was done on up method
    await queryRunner.dropTable('orphanages');
  }
}
