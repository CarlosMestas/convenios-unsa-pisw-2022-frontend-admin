import { IConvocationCoevanResponseDetail, IFormCreateConvocationGeneral } from '../../../shared/interfaces/convocation.interface';
import { createAction, props } from '@ngrx/store';

export const CreateConvocationCoevanActions = {
  POST_CREATE_CONVOCATION_COEVAN_REQUEST_ACTION:"[Create Convocation COEVAN - Service] Request action",
  POST_CREATE_CONVOCATION_COEVAN_SUCCESS_ACTION:"[Create Convocation COEVAN - Service] success action",
  POST_CREATE_CONVOCATION_COEVAN_ERROR_ACTION:"[Create Convocation COEVAN - Service] error action",
}

export const postCreateConvocationCoevanRequestAction = createAction(
  CreateConvocationCoevanActions.POST_CREATE_CONVOCATION_COEVAN_REQUEST_ACTION,
  props<{
    data:{
      general:IFormCreateConvocationGeneral,
      coevan:FormData
    }
  }>()
)
export const postCreateConvocationCoevanSuccessAction = createAction(
  CreateConvocationCoevanActions.POST_CREATE_CONVOCATION_COEVAN_SUCCESS_ACTION,
  props<{data:IConvocationCoevanResponseDetail}>()
)
export const postCreateConvocationCoevanErrorAction = createAction(
  CreateConvocationCoevanActions.POST_CREATE_CONVOCATION_COEVAN_ERROR_ACTION,
)
