import {IAdmin, IAdminError, IAdminCreate, IAdminViewState} from './../../../shared/interfaces/admin.interface';
import { createAction, props } from '@ngrx/store';
export const AdminActions = {
  ADMIN_GET_SUCCESS_ACTION:"[Service] Admin Get Success",
  ADMIN_GET_ALL_REQUEST_ACTION:"[Component] Admin Get All Request",
  ADMIN_GET_ALL_SUCCESS_ACTION:"[Service] Admin Get All Success",
  ADMIN_GET_ALL_ERROR_ACTION:"[Service] Admin Get All Error",
  ADMIN_REGISTER_REQUEST_ACTION:"[Register - Page] Admin Register Request",
  ADMIN_UPDATE_REQUEST_ACTION:"[Update - Page] Admin Update Request",
  ADMIN_REGISTER_SUCCESS_ACTION:"[API - Heroku] Admin Register Success",
  ADMIN_REGISTER_ERROR_ACTION:"[Service] Admin Register Error",
  ADMIN_DATA_SUCCESS_ACTION:"[API - Heroku] Admin Data Success",
  ADMIN_VIEW_STATE_MODAL_ACTION:"[Component] Admin View State Success",
  ADMIN_VIEW_ADMIN_DATA_ACTION:"[Component] Admin View Data Success",
}

// definición de los actions
export const adminGetSuccessAction = createAction(
  AdminActions.ADMIN_GET_SUCCESS_ACTION,
  props<IAdmin>()
)

export const adminGetAllRequestAction = createAction(
  AdminActions.ADMIN_GET_ALL_REQUEST_ACTION
)
export const adminGetAllSuccessAction = createAction(
  AdminActions.ADMIN_GET_ALL_SUCCESS_ACTION,
  props<{data:IAdmin[]}>()
)
export const adminGetAllErrorAction = createAction(
  AdminActions.ADMIN_GET_ALL_ERROR_ACTION,
  props<IAdminError>()
)

export const adminUpdateRequestAction = createAction(
  AdminActions.ADMIN_UPDATE_REQUEST_ACTION,
  props<IAdminCreate>()
)

//actions to create
export const adminRegisterRequestAction = createAction(
  AdminActions.ADMIN_REGISTER_REQUEST_ACTION,
  props<IAdminCreate>()
)

export const adminRegisterSuccessAction = createAction(
  AdminActions.ADMIN_REGISTER_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)

export const adminRegisterErrorAction = createAction(
  AdminActions.ADMIN_REGISTER_ERROR_ACTION,
  props<IAdminError>()
)

export const adminChangeModalStateAction = createAction(
  AdminActions.ADMIN_VIEW_STATE_MODAL_ACTION,
  props<{stateModal:boolean}>()
)
export const adminChangeDataAdminStateAction = createAction(
  AdminActions.ADMIN_VIEW_ADMIN_DATA_ACTION,
  props<{admin:IAdmin}>()
)
export const idAdminStateAction = createAction(
  AdminActions.ADMIN_VIEW_ADMIN_DATA_ACTION,
  props<{id:number}>()
)
