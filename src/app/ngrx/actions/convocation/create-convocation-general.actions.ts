import { IDocument } from './../../../shared/interfaces/create-convocation-document.interface';
import { createAction, props } from '@ngrx/store';
import { IFormCreateConvocationGeneral } from '@app/shared/interfaces/convocation.interface';
export const CreateConvocationGeneralActions = {
  CREATE_CONVOCATION_SET_STATE_ACTION:"[Create Convocation Set State - Component] Set State",
  CREATE_CONVOCATION_SET_STATE_ERROR_ACTION:"[Create Convocation - Service] Set State error"
}

export const createConvocationSetStateAction = createAction(
  CreateConvocationGeneralActions.CREATE_CONVOCATION_SET_STATE_ACTION,
  props<{data:IFormCreateConvocationGeneral}>()
)
export const createConvocationSetStateErrorAction = createAction(
  CreateConvocationGeneralActions.CREATE_CONVOCATION_SET_STATE_ERROR_ACTION,
)
