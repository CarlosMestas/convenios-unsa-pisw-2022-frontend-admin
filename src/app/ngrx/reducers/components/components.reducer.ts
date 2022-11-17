import { createReducer, on } from '@ngrx/store';
import {componentsInitialState} from "@ngrx/initial-states/components.initial-state";
import {showLoadComponentAction, unshowLoadComponentAction} from "@ngrx/actions/components/components.actions";

export const componentsReducer = createReducer(
  componentsInitialState,
  on(showLoadComponentAction, (state)=>{
    return {...state, showLoadingComponent:true}
  }),
  on(unshowLoadComponentAction,(state)=> {
    return {...state, showLoadingComponent: false}
  })
)
