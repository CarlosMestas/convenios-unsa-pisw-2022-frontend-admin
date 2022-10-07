export interface IAdmin{
  id:number,
  name:string,
  lastname:string,
  address:string,
  phone:string,
  email:string,
  role:number
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

