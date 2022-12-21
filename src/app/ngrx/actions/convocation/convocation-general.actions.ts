import { IConvocationResponse } from './../../../shared/interfaces/convocation.interface';
import { IDocument } from '../../../shared/interfaces/create-convocation-document.interface';
import { createAction, props } from '@ngrx/store';
import { IFormCreateConvocationGeneral } from '@app/shared/interfaces/convocation.interface';
export const ConvocationGeneralActions = {
  CREATE_CONVOCATION_SET_STATE_ACTION:"[Create Convocation Set State - Component] Set State",
  CREATE_CONVOCATION_SET_STATE_ERROR_ACTION:"[Create Convocation - Service] Set State error",
  CONVOCATION_GENERAL_GET_ALL_REQUEST_ACTION:"[List Convocations - Component] Get all convocations general request",
  CONVOCATION_GENERAL_GET_ALL_SUCCESS_ACTION:"[List Convocations - Component] Get all convocations general success",
  CONVOCATION_GENERAL_GET_ALL_ERROR_ACTION:"[List Convocations - Component] Get all convocations general error"
}

export const createConvocationSetStateAction = createAction(
  ConvocationGeneralActions.CREATE_CONVOCATION_SET_STATE_ACTION,
  props<{data:IFormCreateConvocationGeneral}>()
)
export const createConvocationSetStateErrorAction = createAction(
  ConvocationGeneralActions.CREATE_CONVOCATION_SET_STATE_ERROR_ACTION,
)

export const convocationGeneralGetAllRequestAction = createAction(
  ConvocationGeneralActions.CONVOCATION_GENERAL_GET_ALL_REQUEST_ACTION,
)

export const convocationGeneralGetAllSuccessAction = createAction(
  ConvocationGeneralActions.CONVOCATION_GENERAL_GET_ALL_SUCCESS_ACTION,
  props<{data:IConvocationResponse[]}>()
)

export const convocationGeneralGetAllErrorAction = createAction(
  ConvocationGeneralActions.CONVOCATION_GENERAL_GET_ALL_ERROR_ACTION,
)
