import {createSelector} from '@ngrx/store'
import {IComponents} from "@shared/interfaces/components.interface";
import {IAppState} from "@ngrx/app.state";

export const componentsStateSelector = (state:IAppState) =>state.components

export const showLoadComponentStateSelector = createSelector(
  componentsStateSelector,
  (authState:IComponents) => authState.showLoadingComponent
)
