import { IAppState } from './../../app.state';
import { createSelector } from '@ngrx/store';
import { IConvocationCoevanState } from '@app/shared/interfaces/convocation.interface';



export const convocationCoevanStateSelector = (state:IAppState) =>  state.convocationCoevan

export const dataDetailConvocationCoevanStateSelector = createSelector(
  convocationCoevanStateSelector,
  (convocationCoevanState:IConvocationCoevanState)=> convocationCoevanState.responseDataDetail
)
