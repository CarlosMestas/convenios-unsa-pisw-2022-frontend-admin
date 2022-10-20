


import { postCreateConvocationCoevanErrorAction, postCreateConvocationCoevanRequestAction, postCreateConvocationCoevanSuccessAction } from '@app/ngrx/actions/convocation/create-convocation-coevan.actions';
import { ConvocationCoevanInitialState } from '@app/ngrx/initial-states/convocation.initial-state';
import { IConvocationCoevanResponseDetail } from '@app/shared/interfaces/convocation.interface';
import { createReducer, on } from '@ngrx/store';
export const convocationCoevanReducer = createReducer(
  ConvocationCoevanInitialState,
  on(postCreateConvocationCoevanRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(postCreateConvocationCoevanSuccessAction,(state,params)=>{
    return {...state,working:false,responseDataDetail:params.data}
  }),
  on(postCreateConvocationCoevanErrorAction,(state)=>{
    return {...state,working:false, responseDataDetail: {} as IConvocationCoevanResponseDetail}
  })
)
