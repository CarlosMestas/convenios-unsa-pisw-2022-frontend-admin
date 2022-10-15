export enum ETypeConvocations{
  PIVE="PIVE",
  PIVDO="PIVDO",
  COEVAN="COEVAN",
  COEVIENEN="COEVIENEN",
  CODVAN="CODVAN",
  CODVIENEN="CODVIENEN",
}

export interface ITypeConvocationResponse{
  id:number,
  name:string,
  acronym:string
}

export interface IModalityConvocationResponse{
  id:number,
  name:string
}


