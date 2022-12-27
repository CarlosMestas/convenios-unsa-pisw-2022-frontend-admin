import { IRequirementResponse } from './requirement.interface';
import { ILink, ILinkResponseDetail } from './create-convocation-link.interface';
import { IDocument, IDocumentResponseDetail } from './create-convocation-document.interface';
import { IUniversityResponse } from './university.interface';
import { IAcademicNetworkResponse } from "./academic-network.interface"
import { ENUMConvocationStatus } from '../enums/convocation.enum';

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

export interface IConvocationGeneralState{
  working:boolean,
  form:IFormCreateConvocationGeneral,
  convocations:IConvocationResponseDetail[]
}
export interface IFormCreateConvocationCoevanState{
  working:boolean,
  academicNetwork:IAcademicNetworkResponse,
  university:IUniversityResponse,
  documents:IDocument[],
  links:ILink[],
  requirements:IRequirementResponse[]
}
export interface IConvocationCoevanState{
  working:boolean,
  responseDataDetail:IConvocationCoevanResponseDetail
}
export interface IConvocationResponseDetail{
  id:number,
  title:string,
  type:ITypeConvocationResponse,
  correlative:string,
  modality:IModalityConvocationResponse,
  description:string,
  start_date:string,
  end_date:string,
  important_notes:string,
  conv_state:IConvocationStateResponse,
  afiche:string
}

export interface IConvocationStateResponse{
  id:number,
  name:string,
  description:string
}
export interface IConvocationCoevanResponseDetail{
  id:number,
    academicNetwork:IAcademicNetworkResponse,
    university:IUniversityResponse,
    documents:IDocumentResponseDetail[],
    links:ILinkResponseDetail[],
    requirements:IRequirementResponse[],
    semester:string,
    avaltext:string,
    coursestext:string,
    commitment:string
}

export interface IFormCreateConvocationGeneral{
  title:string,
  type:number,
  correlative:string,
  modality:number,
  description:string,
  start_date:string,
  end_date:string,
  important_notes:string,
  afiche:File,
  conv_state:ENUMConvocationStatus
}

export interface IConvocationResponse{
  id:number,
  title:string,
  type:number,
  correlative:string,
  modality:number,
  description:string,
  start_date:string,
  end_date:string,
  important_notes:string
}


export interface IConvocationReviewActionObservation{
  description:string,
  esquela:File
}
