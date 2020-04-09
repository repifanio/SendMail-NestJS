import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tabEmails1586377206424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "mail",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "to",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "from",
                    type: "varchar", 
                    isNullable: false
                },
                {
                    name: "subject",
                    type: "varchar"
                },
                {
                    name: "body",
                    type: "varchar"
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('mail')
    }

}
