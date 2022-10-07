import { IAdminState } from "@app/shared/interfaces/admin.interface";
import { IAuthState } from "@app/shared/interfaces/auth.interface";
import { IRoleState } from "@app/shared/interfaces/role.interface";
import { ActionReducerMap } from "@ngrx/store";
import { adminReducer } from "./reducers/admin/admin.reducer";
import { authReducer } from "./reducers/auth/auth.reducer";
import { roleReducer } from "./reducers/role/role.reducer";

// TODO: para colocar las interfaces que definen a sus estados iniciales(initial-states)
// de los módulos que están trabajando
export interface IAppState{
  auth:IAuthState,
  admin:IAdminState,
  role:IRoleState
}
//  de acuerdo a la estructura de la interface IAppState settear los reducers
export const ROOT_REDUCERS: ActionReducerMap<IAppState> ={
  auth:authReducer,
  admin:adminReducer,
  role:roleReducer
}
