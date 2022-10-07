export interface IHttpResponse<T>{
  code:number,
  msg:string,
  data:T
}

export interface IHttpServiceResponse<T>{
  error:boolean,
  msg:string,
  data:T
}
