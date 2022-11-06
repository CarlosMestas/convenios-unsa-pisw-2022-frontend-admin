import { createAction, props } from '@ngrx/store';
import { IRole } from './../../../shared/interfaces/role.interface';
export const RolesActions = {
  SET_ROLE_ACTION:"[Component] Set Rol",
}

// definición de los actions

export const setRoleAction = createAction(
  RolesActions.SET_ROLE_ACTION,
  props<IRole>()
)
