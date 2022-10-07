

import { rolesGetAllErrorAction, rolesGetAllRequestAction, rolesGetAllSuccessAction } from '@app/ngrx/actions/role/role.actions';
import { RoleInitialState } from '@app/ngrx/initial-states/role.initial-state';
import { createReducer, on } from '@ngrx/store';
export const roleReducer = createReducer(
  RoleInitialState,
  on(rolesGetAllRequestAction, (state,params)=>{
    return {...state, working:true}
  }),
  on(rolesGetAllSuccessAction,(state,params)=>{
    return {...state, working:true, roles:params.data}
  }),
  on(rolesGetAllErrorAction,(state, error)=>{
    return {...state, working:false, error}
  })
)
