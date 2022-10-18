import {IAdminState, IAdminViewState} from './../../../shared/interfaces/admin.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from '@app/ngrx/app.state';

export const adminStateSelector = (state:IAppState) => state.admin
export const adminViewItemStateSelector = (state:IAppState) => state.viewAdmin

export const adminGetAllStateSelector = createSelector(
  adminStateSelector,
  (adminState:IAdminState)=>adminState.admins
)

export const adminGetStateSelector = createSelector(
  adminStateSelector,
  (adminState:IAdminState)=>adminState.admin
)

export const adminViewStateModalStateSelector = createSelector(
  adminViewItemStateSelector,
  (adminState:IAdminViewState)=>adminState.stateModal
)

export const adminViewDataAdminStateSelector = createSelector(
  adminViewItemStateSelector,
  (adminState:IAdminViewState)=>adminState.adminData
)
