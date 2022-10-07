import { adminAuthLoginErrorAction, adminAuthLoginRequestAction, adminAuthLoginSuccessAction } from '@app/ngrx/actions/auth/auth.actions'
import { AuthInitialState } from '@app/ngrx/initial-states/auth.initial-state'
import {createReducer,on} from '@ngrx/store'
export const authReducer = createReducer(
  AuthInitialState,
  on(adminAuthLoginRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(adminAuthLoginSuccessAction,(state)=>{
    return {...state, working:false}
  }),
  on(adminAuthLoginErrorAction,(state, error)=>{
    return {...state, working:false, authError:error}
  })
)
