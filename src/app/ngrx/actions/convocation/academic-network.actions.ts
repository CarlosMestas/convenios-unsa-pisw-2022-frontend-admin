import { IAcademicNetwork, IAcademicNetworkResponse } from './../../../shared/interfaces/academic-network.interface';
import { createAction, props } from "@ngrx/store"

export const AcademicNetworkActions = {
  ACADEMIC_NETWORKS_GET_BY_NETWORK_ID_REQUEST_ACTION:"[Convocation - Effect] Convocation Academic Networks by network fetch request",
  ACADEMIC_NETWORKS_GET_BY_NETWORK_ID_SUCCESS_ACTION:"[Convocation - Effect] Convocation Academic Networks by network fetch Success",
  ACADEMIC_NETWORKS_GET_BY_NETWORK_ID_ERROR_ACTION:"[Convocation - Effect] Convocation Academic Networks by network fetch Error",
  ACADEMIC_NETWORKS_GET_ALL_REQUEST_ACTION:"[New Convocation - Component] Academic Networks fetch all request",
  ACADEMIC_NETWORKS_GET_ALL_SUCCESS_ACTION:"[New Convocation - Component] Academic Networks fetch all success",
  ACADEMIC_NETWORKS_GET_ALL_ERROR_ACTION:"[New Convocation - Component] Academic Networks fetch all error",
  ACADEMIC_NETWORK_POST_REQUEST_ACTION:"[Academic Network - Component] Academic Network post request",
  ACADEMIC_NETWORK_POST_SUCCESS_ACTION:"[Academic Network - Service] Academic Network post success",
  ACADEMIC_NETWORK_POST_ERROR_ACTION:"[Academic Network - Service] Academic Network post error"
}

export const academicNetworkGetByNetworkIdRequestAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORKS_GET_BY_NETWORK_ID_REQUEST_ACTION,
  props<{networkId:number}>()
)

export const academicNetworkGetByNetworkIdSuccessAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORKS_GET_BY_NETWORK_ID_SUCCESS_ACTION,
  props<{academicNetworks:IAcademicNetworkResponse[]}>()
)
export const academicNetworkGetByNetworkIdErrorAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORKS_GET_BY_NETWORK_ID_ERROR_ACTION
)

export const academicNetworkGetAllRequestAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORKS_GET_ALL_REQUEST_ACTION
)
export const academicNetworkGetAllSuccessAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORKS_GET_ALL_SUCCESS_ACTION,
  props<{academicNetworks:IAcademicNetworkResponse[]}>()
)
export const academicNetworkGetAllErrorAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORKS_GET_ALL_ERROR_ACTION
)

export const academicNetworkPostRequestAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORK_POST_REQUEST_ACTION,
  props<{value:IAcademicNetwork}>()
)

export const academicNetworkPostSuccessAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORK_POST_SUCCESS_ACTION,
  props<IAcademicNetworkResponse>()
)
export const academicNetworkPostErrorAction = createAction(
  AcademicNetworkActions.ACADEMIC_NETWORK_POST_ERROR_ACTION
)
