// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
  public async register({ view }): HttpContextContract {
    return view.render('auth.register')
  }

  public async login({}): HttpContextContract{

  }
}
