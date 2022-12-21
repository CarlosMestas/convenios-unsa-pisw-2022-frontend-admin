import { createSelector } from '@ngrx/store';
import { IAppState } from '@ngrx/app.state';
import { IRequirementState } from '@app/shared/interfaces/requirement.interface';


export const requirementStateSelector = (state:IAppState) => state.requirements

export const requirementsSelector = createSelector(
  requirementStateSelector,
  (requirementsState:IRequirementState)=>requirementsState.requirements
)
