import { IAppState } from '../../app.state';
import { createSelector } from '@ngrx/store';
import { IConvocationGeneralState } from '@app/shared/interfaces/convocation.interface';



export const createConvocationGeneralStateSelector = (state:IAppState) =>  state.createConvocationGeneral
export const formCreateConvocationGeneralStateSelector = createSelector(
  createConvocationGeneralStateSelector,
  (createConvocationGeneralState:IConvocationGeneralState)=> createConvocationGeneralState.form
)

export const getAllConvocationGeneralStateSelector = createSelector(
  createConvocationGeneralStateSelector,
  (createConvocationGeneralState:IConvocationGeneralState)=> createConvocationGeneralState.convocations
)

