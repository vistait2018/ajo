import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        name: 'super-admin',
      },
      {
        name: 'admin',
      },
      {
        name: 'president',
      },
      {
        name: 'treasurer',
      },
      {
        name: 'user',
      },
      {
        name: 'financial-secretary',
      },
      {
        name: 'secretary',
      },
    ])

  }
}
