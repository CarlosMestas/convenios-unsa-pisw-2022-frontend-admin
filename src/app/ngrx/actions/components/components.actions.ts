import {createAction} from '@ngrx/store'

export const AdminAuthActions = {
  SHOW_LOAD_COMPONENT: "[Component Component] Show Loading Component",
  HIDE_LOAD_COMPONENT: "[Component Component] Hide Loading Component",
  SHOW_ACCOUNT_REQUEST_PANEL_COMPONENT: "[Component Component] Show Account Requests Panel Component",
  HIDE_ACCOUNT_REQUEST_PANEL_COMPONENT: "[Component Component] Hide Account Requests Panel Component",

}
export const showLoadComponentAction = createAction(
  AdminAuthActions.SHOW_LOAD_COMPONENT,
)

export const unshowLoadComponentAction = createAction(
  AdminAuthActions.HIDE_LOAD_COMPONENT,
)

export const showAccountRequestPanelComponentAction = createAction(
  AdminAuthActions.SHOW_ACCOUNT_REQUEST_PANEL_COMPONENT,
)

export const hideAccountRequestComponentAction = createAction(
  AdminAuthActions.HIDE_ACCOUNT_REQUEST_PANEL_COMPONENT,
)


