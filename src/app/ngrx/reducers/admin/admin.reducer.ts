import {
  adminGetAllErrorAction,
  adminGetAllRequestAction,
  adminGetAllSuccessAction,
  adminGetSuccessAction,
  adminRegisterSuccessAction,
  adminRegisterRequestAction,
  adminRegisterErrorAction,
  adminChangeModalStateAction,
  adminChangeDataAdminStateAction,
  setIdAdminStateAction,
} from '@app/ngrx/actions/admin/admin.actions';
import { adminiInitialState } from '@app/ngrx/initial-states/admin.initial-state';
import { createReducer, on } from '@ngrx/store';
import {ViewAdminInitialState} from "@ngrx/initial-states/view-admi.initial-state";

export const adminReducer = createReducer(
  adminiInitialState,
  on(adminGetSuccessAction, (state,params)=>{
    return {...state, working:true, admin:params}
  }),
  on(adminGetAllRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(adminGetAllSuccessAction,(state, params)=>{
    return {...state, working:false, admins:params.data}
  }),
  on(adminGetAllErrorAction,(state, error)=>{
    return {...state, working:false, error}
  }),
  on(adminRegisterSuccessAction,(state) =>{
    return {...state, working:false}
  }),
  on(adminRegisterRequestAction,(state) =>{
    return {...state,working:true}
  }),

  on(adminRegisterErrorAction,(state,error)=>{
    return {...state, working:false, error}
  }),
)

export const adminViewItemReducer = createReducer(
  ViewAdminInitialState,
  on(adminChangeModalStateAction,(state, params)=>{
    return {...state, working:true, stateModal:params.stateModal}
  }),
  on(adminChangeDataAdminStateAction,(state, params)=>{
    return {...state, working:false, adminData: params.admin}
  }),
  on(setIdAdminStateAction,(state, params)=>{
    return {...state, working:false, idAdmin: params.id}
  })
)
