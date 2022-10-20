import { IDocument } from './../../../shared/interfaces/create-convocation-document.interface';
import { createAction, props } from '@ngrx/store';
export const CreateConvocationDocumentActions = {
  CREATE_DOCUMENT_SET_STATE_ACTION:"[Create Convocation Document Set State - Component] Set State",
  CREATE_DOCUMENT_SET_STATE_ERROR_ACTION:"[Create Convocation Document - Service] Set State error"
}

export const createConvocationDocumentSetStateAction = createAction(
  CreateConvocationDocumentActions.CREATE_DOCUMENT_SET_STATE_ACTION,
  props<{data:IDocument}>()
)
export const createConvocationDocumentSetStateErrorAction = createAction(
  CreateConvocationDocumentActions.CREATE_DOCUMENT_SET_STATE_ERROR_ACTION,
)
