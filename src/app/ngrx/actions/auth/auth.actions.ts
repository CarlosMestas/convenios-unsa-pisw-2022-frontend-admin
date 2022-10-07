import { IAdmin } from '@app/shared/interfaces/admin.interface'
import { IAdminLogin, IAuthError } from '@app/shared/interfaces/auth.interface'
import {createAction, props} from '@ngrx/store'
export const AdminAuthActions = {
  ADMIN_AUTH_LOGIN_REQUEST: "[Login Page] Admin Login Request",
  ADMIN_AUTH_LOGIN_SUCCESS: "[Auth Service] Admin Login Success",
  ADMIN_AUTH_LOGIN_ERROR: "[Auth Service] Admin Login Error"
}
export const adminAuthLoginRequestAction = createAction(
  AdminAuthActions.ADMIN_AUTH_LOGIN_REQUEST,
  props<IAdminLogin>()
)
export const adminAuthLoginSuccessAction = createAction(
  AdminAuthActions.ADMIN_AUTH_LOGIN_SUCCESS,
  props<IAdmin>()
)
export const adminAuthLoginErrorAction = createAction(
  AdminAuthActions.ADMIN_AUTH_LOGIN_ERROR,
  props<IAuthError>()
)
