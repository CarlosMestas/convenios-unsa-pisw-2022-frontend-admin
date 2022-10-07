import { IAdminLogin } from './../interfaces/auth.interface';
export class AdminLogin implements IAdminLogin{
  user:string
  password: string
  constructor(user:string, password:string){
    this.user = user
    this.password = password
  }
}
