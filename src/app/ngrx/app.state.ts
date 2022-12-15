import { IAcademicNetworkState } from './../shared/interfaces/academic-network.interface';
import { IUniversityState } from './../shared/interfaces/university.interface';
import {IAdminState, IAdminViewState} from "@app/shared/interfaces/admin.interface";
import { IAuthState } from "@app/shared/interfaces/auth.interface";
import { IConvocationCoevanState, IConvocationGeneralState, IFormCreateConvocationCoevanState } from "@app/shared/interfaces/convocation.interface";
import {IRole, IRoleState} from "@app/shared/interfaces/role.interface";
import { ActionReducerMap } from "@ngrx/store";
import {adminReducer, adminViewItemReducer} from "./reducers/admin/admin.reducer";
import { authReducer } from "./reducers/auth/auth.reducer";
import { convocationCoevanReducer } from "./reducers/convocation/convocation-coevan.reducer";
import { ConvocationGeneralReducer } from "./reducers/convocation/convocation-general.reducer";
import { formCreateConvocationCoevanReducer } from "./reducers/convocation/form-create-coevan.reducer";
import { roleReducer } from "./reducers/role/role.reducer";
import {roleLogReducer} from "@ngrx/reducers/role/roleLog.reducer";
import {IComponents} from "@shared/interfaces/components.interface";
import {componentsReducer} from "@ngrx/reducers/components/components.reducer";
import { IRequirementState } from "@app/shared/interfaces/requirement.interface";
import { RequirementsReducer } from "./reducers/convocation/requirements.reducer";
import { UniversitiesReducer } from './reducers/convocation/university.reducer';
import { AcademicNetworkReducer } from './reducers/convocation/academic-network.reducer';

// TODO: para colocar las interfaces que definen a sus estados iniciales(initial-states)
// de los módulos que están trabajando
export interface IAppState{
  auth:IAuthState,
  admin:IAdminState,
  formCreateConvocationCoevan:IFormCreateConvocationCoevanState,
  createConvocationGeneral:IConvocationGeneralState,
  convocationCoevan:IConvocationCoevanState
  role:IRoleState
  viewAdmin:IAdminViewState,
  roleLog: IRole,
  components: IComponents,
  requirements:IRequirementState,
  universities:IUniversityState,
  academicNetworks:IAcademicNetworkState
}
//  de acuerdo a la estructura de la interface IAppState settear los reducers
export const ROOT_REDUCERS: ActionReducerMap<IAppState> ={
  auth:authReducer,
  admin:adminReducer,
  role:roleReducer,
  formCreateConvocationCoevan:formCreateConvocationCoevanReducer,
  createConvocationGeneral:ConvocationGeneralReducer,
  convocationCoevan:convocationCoevanReducer,
  viewAdmin: adminViewItemReducer,
  roleLog: roleLogReducer,
  components: componentsReducer,
  requirements:RequirementsReducer,
  universities:UniversitiesReducer,
  academicNetworks:AcademicNetworkReducer
}
