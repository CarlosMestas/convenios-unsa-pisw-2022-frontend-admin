export interface IAcademicNetworkResponse{
  id: number,
  name:string,
  acronym:string,
  description:string,
  logo:string
}

export interface IAcademicNetwork{
  name:string,
  acronym:string,
  description:string
  logo:File
}


export interface IAcademicNetworkState{
  academicNetworks:IAcademicNetworkResponse[],
  working:boolean
}

