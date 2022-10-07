export interface IRole{
  id:number,
  name:string
}

export interface IRoleError{
  code:number,
  msg:string
}
export interface IRoleState{
  working:boolean,
  roles:IRole[],
  error:IRoleError|null
}
