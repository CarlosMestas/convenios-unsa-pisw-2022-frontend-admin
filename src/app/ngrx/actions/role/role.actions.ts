import { IRole, IRoleError } from './../../../shared/interfaces/role.interface';
import { createAction, props } from '@ngrx/store';
export const RolesActions = {
  ROLES_GET_ALL_REQUEST_ACTION:"[Component] Roles Get All Request",
  ROLES_GET_ALL_SUCCESS_ACTION:"[Service] Roles Get All Success",
  ROLES_GET_ALL_ERROR_ACTION:"[Service] Roles Get All Error"
}

// definición de los actions
export const rolesGetAllRequestAction = createAction(
  RolesActions.ROLES_GET_ALL_REQUEST_ACTION
)
export const rolesGetAllSuccessAction = createAction(
  RolesActions.ROLES_GET_ALL_SUCCESS_ACTION,
  props<{data:IRole[]}>()
)
export const rolesGetAllErrorAction = createAction(
  RolesActions.ROLES_GET_ALL_ERROR_ACTION,
  props<IRoleError>()
)
