import { createReducer, on } from '@ngrx/store';
import {componentsInitialState} from "@ngrx/initial-states/components.initial-state";
import {
  hideAccountRequestComponentAction,
  showAccountRequestPanelComponentAction,
  showLoadComponentAction,
  unshowLoadComponentAction
} from "@ngrx/actions/components/components.actions";

export const componentsReducer = createReducer(
  componentsInitialState,
  on(showLoadComponentAction, (state)=>{
    return {...state, showLoadingComponent:true}
  }),
  on(unshowLoadComponentAction,(state)=> {
    return {...state, showLoadingComponent: false}
  }),

  /* Panel de solicitud de creación de cuenta*/
  on(showAccountRequestPanelComponentAction, (state)=>{
    return {...state, showAccountRequestPanel:true}
  }),
  on(hideAccountRequestComponentAction,(state)=> {
    return {...state, showAccountRequestPanel: false}
  }),
)
