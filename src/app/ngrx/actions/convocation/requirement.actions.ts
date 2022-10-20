import { IRequirementResponse } from '@shared/interfaces/requirement.interface';
import { createAction, props } from "@ngrx/store"

export const RequirementActions = {
  REQUIREMENTS_GET_BY_CONVOCATION_ID_REQUEST_ACTION:"[Convocation - Effect] Convocation Requirements fetch request",
  REQUIREMENTS_GET_BY_CONVOCATION_ID_SUCCESS_ACTION:"[Convocation - Effect] Convocation Requirements fetch Success",
  REQUIREMENTS_GET_BY_CONVOCATION_ID_ERROR_ACTION:"[Convocation - Effect] Convocation Requirements fetch Error",
  REQUIREMENTS_GET_ALL_REQUEST_ACTION:"[New Convocation - Component] Requirements fetch all request",
  REQUIREMENTS_GET_ALL_SUCCESS_ACTION:"[New Convocation - Component] Requirements fetch all success",
  REQUIREMENTS_GET_ALL_ERROR_ACTION:"[New Convocation - Component] Requirements fetch all error",
  REQUIREMENT_POST_REQUEST_ACTION:"[Requirement - Component] Requirements post request",
  REQUIREMENT_POST_SUCCESS_ACTION:"[Requirement - Service] Requirements post success",
  REQUIREMENT_POST_ERROR_ACTION:"[Requirement - Service] Requirements post error"
}

export const requirementGetByConvocationIdRequestAction = createAction(
  RequirementActions.REQUIREMENTS_GET_BY_CONVOCATION_ID_REQUEST_ACTION,
  props<{convocationId:number}>()
)

export const requirementGetByConvocationIdSuccessAction = createAction(
  RequirementActions.REQUIREMENTS_GET_BY_CONVOCATION_ID_SUCCESS_ACTION,
  props<{requirements:IRequirementResponse[]}>()
)
export const requirementGetByConvocationIdErrorAction = createAction(
  RequirementActions.REQUIREMENTS_GET_BY_CONVOCATION_ID_ERROR_ACTION
)

export const requirementsGetAllRequestAction = createAction(
  RequirementActions.REQUIREMENTS_GET_ALL_REQUEST_ACTION
)
export const requirementsGetAllSuccessAction = createAction(
  RequirementActions.REQUIREMENTS_GET_ALL_SUCCESS_ACTION,
  props<{requirements:IRequirementResponse[]}>()
)
export const requirementsGetAllErrorAction = createAction(
  RequirementActions.REQUIREMENTS_GET_ALL_ERROR_ACTION
)

export const requirementPostRequestAction = createAction(
  RequirementActions.REQUIREMENT_POST_REQUEST_ACTION,
  props<{value:string}>()
)

export const requirementPostSuccessAction = createAction(
  RequirementActions.REQUIREMENT_POST_SUCCESS_ACTION,
  props<IRequirementResponse>()
)
export const requirementPostErrorAction = createAction(
  RequirementActions.REQUIREMENT_POST_ERROR_ACTION
)
