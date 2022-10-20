

import { createConvocationSetStateAction } from '@app/ngrx/actions/convocation/create-convocation-general.actions';
import { CreateConvocationGeneralInitialState } from '@app/ngrx/initial-states/convocation.initial-state';
import { createReducer, on } from '@ngrx/store';
export const createConvocationGeneralReducer = createReducer(
  CreateConvocationGeneralInitialState,
  on(createConvocationSetStateAction,(state,params)=>{
    return {...state,form: params.data}
  })
)
