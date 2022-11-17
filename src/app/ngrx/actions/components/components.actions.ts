import {createAction, props} from '@ngrx/store'

export const AdminAuthActions = {
  SHOW_LOAD_COMPONENT: "[Component Component] Show Loading Component",
  UNSHOW_LOAD_COMPONENT: "[Component Component] Unshow Loading Component",
}
export const showLoadComponentAction = createAction(
  AdminAuthActions.SHOW_LOAD_COMPONENT,
)

export const unshowLoadComponentAction = createAction(
  AdminAuthActions.UNSHOW_LOAD_COMPONENT,
)
