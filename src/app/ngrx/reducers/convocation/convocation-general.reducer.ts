

import { convocationGeneralGetAllErrorAction, convocationGeneralGetAllRequestAction, convocationGeneralGetAllSuccessAction, createConvocationSetStateAction } from '@app/ngrx/actions/convocation/convocation-general.actions';
import { ConvocationGeneralInitialState } from '@app/ngrx/initial-states/convocation.initial-state';
import { createReducer, on } from '@ngrx/store';
export const ConvocationGeneralReducer = createReducer(
  ConvocationGeneralInitialState,
  on(createConvocationSetStateAction,(state,params)=>{
    return {...state,form: params.data}
  }),
  on(convocationGeneralGetAllRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(convocationGeneralGetAllSuccessAction,(state,params)=>{
    return {...state,convocations: params.data, working:false}
  }),
  on(convocationGeneralGetAllErrorAction,(state)=>{
    return {...state,working:false}
  }),
)
