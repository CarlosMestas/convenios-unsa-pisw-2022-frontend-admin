import { IAppState } from '@app/ngrx/app.state'
import { IAuthState } from '@app/shared/interfaces/auth.interface'
import {createSelector} from '@ngrx/store'



export const authStateSelector = (state:IAppState) =>state.auth

export const authErrorStateSelector = createSelector(
  authStateSelector,
  (authState:IAuthState) => authState.authError
)
