import { IAdminState } from './../../../shared/interfaces/admin.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from '@app/ngrx/app.state';

export const adminStateSelector = (state:IAppState) => state.admin

export const adminGetAllStateSelector = createSelector(
  adminStateSelector,
  (adminState:IAdminState)=>adminState.admins
)

export const adminGetStateSelector = createSelector(
  adminStateSelector,
  (adminState:IAdminState)=>adminState.admin
)
