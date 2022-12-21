import { AcademicNetworkInitialState } from './../../initial-states/academic-network.initial-state';

import { createReducer, on } from '@ngrx/store';
import { academicNetworkGetAllErrorAction, academicNetworkGetAllRequestAction, academicNetworkGetAllSuccessAction, academicNetworkPostErrorAction, academicNetworkPostRequestAction, academicNetworkPostSuccessAction } from '@app/ngrx/actions/convocation/academic-network.actions';
export const AcademicNetworkReducer = createReducer(
  AcademicNetworkInitialState,
  on(academicNetworkGetAllRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(academicNetworkGetAllSuccessAction,(state,params)=>{
    return {...state, academicNetworks:params.academicNetworks}
  }),
  on(academicNetworkGetAllErrorAction,(state)=>{
    return {...state,working:false}
  }),
  on(academicNetworkPostRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(academicNetworkPostSuccessAction,(state)=>{
    return {...state, working:false}
  }),
  on(academicNetworkPostErrorAction,(state)=>{
    return {...state, working:false}
  })
)
