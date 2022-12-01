export interface IUniversityResponse{
  id:number,
  name:string,
  acronym:string,
  logo:string
}

export interface IUniversity{
  name:string,
  acronym:string,
  logo:File
}

export interface IUniversityState{
  universities:IUniversityResponse[],
  working:boolean
}
