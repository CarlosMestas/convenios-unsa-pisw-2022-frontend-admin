import { IAppState } from './../../app.state';
import { createSelector } from '@ngrx/store';
import { ICreateConvocationGeneralState } from '@app/shared/interfaces/convocation.interface';



export const createConvocationGeneralStateSelector = (state:IAppState) =>  state.createConvocationGeneral
export const formCreateConvocationGeneralStateSelector = createSelector(
  createConvocationGeneralStateSelector,
  (createConvocationGeneralState:ICreateConvocationGeneralState)=> createConvocationGeneralState.form
)
