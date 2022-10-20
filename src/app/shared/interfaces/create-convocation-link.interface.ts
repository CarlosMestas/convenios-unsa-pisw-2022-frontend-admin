export interface ILink{
  name:string,
  type:number,
  url:string,
  description:string
}

export interface ILinkTypeResponse{
  id:number,
  name:string,
  category:string
}
export interface ILinkResponseDetail{
  id:number,
  name:string,
  type:ILinkTypeResponse,
  url:string,
  description:string
}
