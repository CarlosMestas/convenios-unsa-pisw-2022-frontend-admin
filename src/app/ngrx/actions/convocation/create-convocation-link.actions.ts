import { ILink } from './../../../shared/interfaces/create-convocation-link.interface';
import { IDocument } from './../../../shared/interfaces/create-convocation-document.interface';
import { createAction, props } from '@ngrx/store';
export const CreateConvocationLinkActions = {
  CREATE_LINK_SET_STATE_ACTION:"[Create Convocation Link Set State - Component] Set State",
  CREATE_LINK_SET_STATE_ERROR_ACTION:"[Create Convocation Link - Service] Set State error"
}

export const createConvocationLinkSetStateAction = createAction(
  CreateConvocationLinkActions.CREATE_LINK_SET_STATE_ACTION,
  props<{data:ILink}>()
)
export const createConvocationLinkSetStateErrorAction = createAction(
  CreateConvocationLinkActions.CREATE_LINK_SET_STATE_ERROR_ACTION,
)
