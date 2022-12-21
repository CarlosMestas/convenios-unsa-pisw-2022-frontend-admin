import { AcademicNetworkService } from '@app/core/services/academic-network/academic-network.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';

import {
  academicNetworkGetAllRequestAction,
  AcademicNetworkActions,
  academicNetworkPostRequestAction,
} from '@app/ngrx/actions/convocation/academic-network.actions';

@Injectable()
export class AcademicNetworkEffect {
  constructor(
    private actions$: Actions,
    private academicNetworkService: AcademicNetworkService
  ) {}

  academicNetworkGetAllRequestEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(academicNetworkGetAllRequestAction),
      mergeMap(() =>
        this.academicNetworkService.getAllAcademicNetwork().pipe(
          map((resp) => {
            return {
              type: AcademicNetworkActions.ACADEMIC_NETWORKS_GET_ALL_SUCCESS_ACTION,
              academicNetworks: resp.data,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  academicNetworkPostRequestEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(academicNetworkPostRequestAction),
      mergeMap((action) => {
        let form: FormData = new FormData();
        form.append('name', action.value.name);
        form.append('acronym', action.value.acronym);
        form.append('description', action.value.description);
        form.append('logo', action.value.logo, action.value.logo.name);
        return this.academicNetworkService.postAcademicNetwork(form).pipe(
          map((resp) => {
            return {
              type: AcademicNetworkActions.ACADEMIC_NETWORKS_GET_ALL_REQUEST_ACTION,
            };
          })
        );
      })
    )
  );
}
