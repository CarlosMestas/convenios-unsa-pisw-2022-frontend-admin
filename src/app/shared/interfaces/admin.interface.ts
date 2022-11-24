import {Admin} from "@shared/models/admin.model";
import {IRole} from "@shared/interfaces/role.interface";

export interface ILoginAdmin{
  token: '',
  user: IAdminData
}

export interface IAdmin{
  id:number,
  name:string,
  lastname:string,
  address:string,
  phone:string,
  email:string,
  role:number
}
export interface IAdminData{
  id:number,
  name:string,
  lastname:string,
  address:string,
  phone:string,
  email:string,
  password:string,
  role:IRole
}
export interface IAdminCreate{
  name:string,
  lastname:string,
  address:string,
  phone:string,
  email:string,
  password:string,
  role:string
}

export interface IAdminError{
  code:number,
  msg:string
}
export interface IAdminState{
  working:boolean,
  admin:IAdmin|null,
  admins:IAdmin[],
  error:IAdminError|null
}

export interface IAdminViewState{
  working: boolean,
  stateModal: boolean,
  adminData: Admin,
  idAdmin: number,
  error: null
}
