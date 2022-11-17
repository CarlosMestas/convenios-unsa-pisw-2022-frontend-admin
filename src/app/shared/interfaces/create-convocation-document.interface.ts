export interface IDocument{
  name:string,
  type:number,
  document:File,
  description:string
}

export interface IDocumentWOFile{
  name:string,
  type:number,
  description:string
}

export interface IDocumentDetail{
  name:string,
  type:IDocumentTypeResponse,
  document:File,
  description:string
}
export interface IDocumentResponseDetail{
  id:number,
  name:string,
  type:IDocumentTypeResponse,
  url:string,
  description:string
}
export interface IDocumentTypeResponse{
  id:number,
  name:string,
  category:string
}
