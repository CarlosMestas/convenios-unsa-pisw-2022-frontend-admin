import { IUniversityState } from './../../../shared/interfaces/university.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from '@ngrx/app.state';


export const universityStateSelector = (state:IAppState) => state.universities

export const universitiesSelector = createSelector(
  universityStateSelector,
  (universitiesState:IUniversityState)=>universitiesState.universities
)
