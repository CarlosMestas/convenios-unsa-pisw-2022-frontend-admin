import {IAdmin, IAdminData} from './../interfaces/admin.interface';
import {IRole} from "@shared/interfaces/role.interface";
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

export class AdminData implements IAdminData{
  id: number;
  name: string;
  lastname: string;
  address: string;
  phone: string;
  email: string;
  password:string;
  role: IRole;
  constructor(
    id: number,
    name: string,
    lastname: string,
    address: string,
    phone: string,
    email: string,
    password: string,
    role: IRole,
  ){
    this.id = id
    this.name = name
    this.lastname = lastname
    this.address = address
    this.phone = phone
    this.email = email
    this.password = password
    this.role = role
  }
}
