import { IUniversityResponse } from './../../shared/interfaces/university.interface';
import { IAcademicNetworkResponse } from './../../shared/interfaces/academic-network.interface';
import { IConvocationCoevanResponseDetail, IConvocationCoevanState, ICreateConvocationGeneralState, IFormCreateConvocationCoevanState, IFormCreateConvocationGeneral } from "@app/shared/interfaces/convocation.interface";

export const FormCreateConvocationCoevanInitialState:IFormCreateConvocationCoevanState = {
  working: false,
  academicNetwork: {} as IAcademicNetworkResponse,
  university: {} as IUniversityResponse,
  documents: [],
  links: [],
  requirements: []
}

export const CreateConvocationGeneralInitialState:ICreateConvocationGeneralState ={
  working: false,
  form: {} as IFormCreateConvocationGeneral
}

export const ConvocationCoevanInitialState:IConvocationCoevanState ={
  working: false,
  responseDataDetail: {} as IConvocationCoevanResponseDetail
}
