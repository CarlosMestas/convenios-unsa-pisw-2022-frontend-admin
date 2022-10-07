import { createSelector } from '@ngrx/store';
import { IAppState } from '@app/ngrx/app.state';
import { IRoleState } from '@app/shared/interfaces/role.interface';

export const roleStateSelector = (state:IAppState) => state.role

export const roleGetAllStateSelector = createSelector(
  roleStateSelector,
  (roleState:IRoleState)=>roleState.roles
)
