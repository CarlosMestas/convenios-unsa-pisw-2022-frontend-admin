import {IAdminState, IAdminViewState} from "@app/shared/interfaces/admin.interface";
import { IAuthState } from "@app/shared/interfaces/auth.interface";
import { IConvocationCoevanState, ICreateConvocationGeneralState, IFormCreateConvocationCoevanState } from "@app/shared/interfaces/convocation.interface";
import { IRoleState } from "@app/shared/interfaces/role.interface";
import { ActionReducerMap } from "@ngrx/store";
import {adminReducer, adminViewItemReducer} from "./reducers/admin/admin.reducer";
import { authReducer } from "./reducers/auth/auth.reducer";
import { convocationCoevanReducer } from "./reducers/convocation/convocation-coevan.reducer";
import { createConvocationGeneralReducer } from "./reducers/convocation/create-convocation-general.reducer";
import { formCreateConvocationCoevanReducer } from "./reducers/convocation/form-create-coevan.reducer";
import { roleReducer } from "./reducers/role/role.reducer";

// TODO: para colocar las interfaces que definen a sus estados iniciales(initial-states)
// de los módulos que están trabajando
export interface IAppState{
  auth:IAuthState,
  admin:IAdminState,
  formCreateConvocationCoevan:IFormCreateConvocationCoevanState,
  createConvocationGeneral:ICreateConvocationGeneralState,
  convocationCoevan:IConvocationCoevanState
  role:IRoleState
  viewAdmin:IAdminViewState
}
//  de acuerdo a la estructura de la interface IAppState settear los reducers
export const ROOT_REDUCERS: ActionReducerMap<IAppState> ={
  auth:authReducer,
  admin:adminReducer,
  role:roleReducer,
  formCreateConvocationCoevan:formCreateConvocationCoevanReducer,
  createConvocationGeneral:createConvocationGeneralReducer,
  convocationCoevan:convocationCoevanReducer,
  viewAdmin: adminViewItemReducer
}
