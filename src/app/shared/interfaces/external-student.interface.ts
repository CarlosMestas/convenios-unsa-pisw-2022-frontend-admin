export interface IExternalStudent{
  id:number,
  name:string,
  lastname:string,
  email:string,
  justification:string,
  status_request: number,
  password_created: string
}

export interface IExternalStudentError{
  code:number,
  msg:string
}
export interface IExternalStudentState{
  working:boolean,
  roles:IExternalStudent[],
  error:IExternalStudentError|null
}
