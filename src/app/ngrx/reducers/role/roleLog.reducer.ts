import {RoleInitState} from '@app/ngrx/initial-states/role.initial-state';
import { createReducer, on } from '@ngrx/store';
import { setRoleAction} from "@ngrx/actions/role/roleLog.actions";

export const roleLogReducer = createReducer(
  RoleInitState,
  on(setRoleAction, (state, params)=>{
    return {...state, id: params.id, name: params.name }
  }),
)
