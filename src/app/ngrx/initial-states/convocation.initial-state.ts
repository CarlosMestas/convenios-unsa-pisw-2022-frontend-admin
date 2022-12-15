import { IConvocationResponse } from './../../shared/interfaces/convocation.interface';
import { IUniversityResponse } from './../../shared/interfaces/university.interface';
import { IAcademicNetworkResponse } from './../../shared/interfaces/academic-network.interface';
import { IConvocationCoevanResponseDetail, IConvocationCoevanState, IConvocationGeneralState, IFormCreateConvocationCoevanState, IFormCreateConvocationGeneral } from "@app/shared/interfaces/convocation.interface";

export const FormCreateConvocationCoevanInitialState:IFormCreateConvocationCoevanState = {
  working: false,
  academicNetwork: {} as IAcademicNetworkResponse,
  university: {} as IUniversityResponse,
  documents: [],
  links: [],
  requirements: []
}

export const ConvocationGeneralInitialState:IConvocationGeneralState ={
  working: false,
  form: {} as IFormCreateConvocationGeneral,
  convocations: []
}

export const ConvocationCoevanInitialState:IConvocationCoevanState ={
  working: false,
  responseDataDetail: {} as IConvocationCoevanResponseDetail
}
