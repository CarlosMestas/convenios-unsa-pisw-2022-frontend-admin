import { createSelector } from '@ngrx/store';
import {IRole} from '@app/shared/interfaces/role.interface';
import {IAppState} from "@ngrx/app.state";

export const roleLogStateSelector = (state:IAppState) => state.roleLog

export const roleGetStateSelector = createSelector(
  roleLogStateSelector,
  (roleState:IRole)=>roleState
)
