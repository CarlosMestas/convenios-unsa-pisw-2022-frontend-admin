export interface IAdminLogin{
  user:string,
  password:string
}

export interface IAuthState{
  working:boolean,
  authError:IAuthError|null
}
export interface IAuthError{
  code:number,
  msg:string
}
