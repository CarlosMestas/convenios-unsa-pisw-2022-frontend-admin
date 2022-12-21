import { IAcademicNetworkState } from './../../../shared/interfaces/academic-network.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from '@ngrx/app.state';


export const academicNetworkStateSelector = (state:IAppState) => state.academicNetworks

export const academicNetworksSelector = createSelector(
  academicNetworkStateSelector,
  (academicNetworkState:IAcademicNetworkState)=>academicNetworkState.academicNetworks
)
