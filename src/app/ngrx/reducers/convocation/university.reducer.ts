import { UniversityInitialState } from './../../initial-states/university.initial-state';

import { createReducer, on } from '@ngrx/store';
import { universitiesGetAllErrorAction, universitiesGetAllRequestAction, universitiesGetAllSuccessAction, universityPostErrorAction, universityPostRequestAction, universityPostSuccessAction } from '@app/ngrx/actions/convocation/university.actions';
export const UniversitiesReducer = createReducer(
  UniversityInitialState,
  on(universitiesGetAllRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(universitiesGetAllSuccessAction,(state,params)=>{
    return {...state, universities:params.universities}
  }),
  on(universitiesGetAllErrorAction,(state)=>{
    return {...state,working:false}
  }),
  on(universityPostRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(universityPostSuccessAction,(state)=>{
    return {...state, working:false}
  }),
  on(universityPostErrorAction,(state)=>{
    return {...state, working:false}
  })
)
