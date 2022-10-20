import { IRequirementResponse } from './../../../shared/interfaces/requirement.interface';
import { IAppState } from './../../app.state';
import { createSelector } from '@ngrx/store';
import { IFormCreateConvocationCoevanState } from '@app/shared/interfaces/convocation.interface';



export const formCreateConvocationCoevanStateSelector = (state:IAppState) =>  state.formCreateConvocationCoevan

export const requirementsFormCreateConvocationCoevanStateSelector = createSelector(
  formCreateConvocationCoevanStateSelector,
  (formCreateConvocationCoevanState:IFormCreateConvocationCoevanState)=> formCreateConvocationCoevanState.requirements
)
export const documentsFormCreateConvocationCoevanStateSelector = createSelector(
  formCreateConvocationCoevanStateSelector,
  (formCreateConvocationCoevanState:IFormCreateConvocationCoevanState)=> formCreateConvocationCoevanState.documents
)

export const linksFormCreateConvocationCoevanStateSelector = createSelector(
  formCreateConvocationCoevanStateSelector,
  (formCreateConvocationCoevanState:IFormCreateConvocationCoevanState)=> formCreateConvocationCoevanState.links
)
