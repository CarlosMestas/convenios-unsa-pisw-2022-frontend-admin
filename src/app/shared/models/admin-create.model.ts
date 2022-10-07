import { IAdminCreate } from './../interfaces/admin.interface';
export class AdminCreate implements IAdminCreate{
  name: string;
  lastname: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  constructor(
    name: string,
    lastname: string,
    address: string,
    phone: string,
    email: string,
    password: string,
    role: string,
  ){
    this.name = name
    this.lastname = lastname
    this.address = address
    this.phone = phone
    this.email = email
    this.password = password
    this.role = role
  }

}
