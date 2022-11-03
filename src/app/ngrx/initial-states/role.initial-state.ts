import {IRole, IRoleState} from "@app/shared/interfaces/role.interface";

export const RoleInitialState:IRoleState = {
  working: false,
  roles: [],
  error: null
}

export const RoleInitState:IRole = {
  id: 1,
  name: 'Adminstrador',
}
