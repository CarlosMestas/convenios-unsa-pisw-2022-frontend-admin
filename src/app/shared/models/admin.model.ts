import { IAdmin} from './../interfaces/admin.interface';
export class Admin implements IAdmin{
  id: number;
  name: string;
  lastname: string;
  address: string;
  phone: string;
  email: string;
  role: number;
  constructor(
    id: number,
    name: string,
    lastname: string,
    address: string,
    phone: string,
    email: string,
    role: number,
  ){
    this.id = id
    this.name = name
    this.lastname = lastname
    this.address = address
    this.phone = phone
    this.email = email
    this.role = role
  }

}
