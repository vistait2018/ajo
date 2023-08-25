import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.name,
    email: 'jidedorcas@gmail.com',
    password: '1234',
  }
}).build()
