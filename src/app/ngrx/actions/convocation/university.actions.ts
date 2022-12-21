import { IUniversity, IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { createAction, props } from "@ngrx/store"

export const UniversityActions = {
  UNIVERSITIES_GET_BY_NETWORK_ID_REQUEST_ACTION:"[Convocation - Effect] Convocation Universities by network fetch request",
  UNIVERSITIES_GET_BY_NETWORK_ID_SUCCESS_ACTION:"[Convocation - Effect] Convocation Universities by network fetch Success",
  UNIVERSITIES_GET_BY_NETWORK_ID_ERROR_ACTION:"[Convocation - Effect] Convocation Universities by network fetch Error",
  UNIVERSITIES_GET_ALL_REQUEST_ACTION:"[New Convocation - Component] Universities fetch all request",
  UNIVERSITIES_GET_ALL_SUCCESS_ACTION:"[New Convocation - Component] Universities fetch all success",
  UNIVERSITIES_GET_ALL_ERROR_ACTION:"[New Convocation - Component] Universities fetch all error",
  UNIVERSITY_POST_REQUEST_ACTION:"[University - Component] University post request",
  UNIVERSITY_POST_SUCCESS_ACTION:"[University - Service] University post success",
  UNIVERSITY_POST_ERROR_ACTION:"[University - Service] University post error"
}

export const universityGetByNetworkIdRequestAction = createAction(
  UniversityActions.UNIVERSITIES_GET_BY_NETWORK_ID_REQUEST_ACTION,
  props<{networkId:number}>()
)

export const universityGetByNetworkIdSuccessAction = createAction(
  UniversityActions.UNIVERSITIES_GET_BY_NETWORK_ID_SUCCESS_ACTION,
  props<{universities:IUniversityResponse[]}>()
)
export const universityGetByNetworkIdErrorAction = createAction(
  UniversityActions.UNIVERSITIES_GET_BY_NETWORK_ID_ERROR_ACTION
)

export const universitiesGetAllRequestAction = createAction(
  UniversityActions.UNIVERSITIES_GET_ALL_REQUEST_ACTION
)
export const universitiesGetAllSuccessAction = createAction(
  UniversityActions.UNIVERSITIES_GET_ALL_SUCCESS_ACTION,
  props<{universities:IUniversityResponse[]}>()
)
export const universitiesGetAllErrorAction = createAction(
  UniversityActions.UNIVERSITIES_GET_ALL_ERROR_ACTION
)

export const universityPostRequestAction = createAction(
  UniversityActions.UNIVERSITY_POST_REQUEST_ACTION,
  props<{value:IUniversity}>()
)

export const universityPostSuccessAction = createAction(
  UniversityActions.UNIVERSITY_POST_SUCCESS_ACTION,
  props<IUniversityResponse>()
)
export const universityPostErrorAction = createAction(
  UniversityActions.UNIVERSITY_POST_ERROR_ACTION
)
