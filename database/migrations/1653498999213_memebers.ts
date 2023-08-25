import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('middle_name').nullable()
      table.string('profession')
      table.string('phone_no').notNullable()
      table.string('sex').notNullable()
      table.string('dob').notNullable()
      table.string('address').notNullable()
      table.string('email').notNullable()
      table.string('photo').nullable()
      table.string('member_identification_number').notNullable()
      table.string('next_of_kin').notNullable()
      table.string('next_of_kin_phone_no').notNullable()
      table.string('next_of_kin_address').notNullable()
      table.integer('coop_id').unsigned().references('coops.id').onDelete('CASCADE') //
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
