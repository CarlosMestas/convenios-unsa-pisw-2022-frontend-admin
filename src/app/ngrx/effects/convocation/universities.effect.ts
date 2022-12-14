import { universityGetByNetworkIdRequestAction } from './../../actions/convocation/university.actions';
import { UniversityService } from '@app/core/services/university/university.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';

import {
  universitiesGetAllRequestAction,
  UniversityActions,
  universityPostRequestAction,
} from '@app/ngrx/actions/convocation/university.actions';

@Injectable()
export class UniversityEffect {
  constructor(
    private actions$: Actions,
    private universityService: UniversityService
  ) {}

  universitiesGetAllRequestEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(universitiesGetAllRequestAction),
      mergeMap(() =>
        this.universityService.getAllUniversity().pipe(
          map((resp) => {
            return {
              type: UniversityActions.UNIVERSITIES_GET_ALL_SUCCESS_ACTION,
              universities: resp.data,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  universitiesByAcademicNetworkRequestEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(universityGetByNetworkIdRequestAction),
      mergeMap((action) =>
        this.universityService.getUniversityByAcademicNetwork(action.networkId).pipe(
          map((resp) => {
            return {
              type: UniversityActions.UNIVERSITIES_GET_BY_NETWORK_ID_SUCCESS_ACTION,
              universities: resp.data,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  universityPostRequestEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(universityPostRequestAction),
      mergeMap((action) => {
        let form: FormData = new FormData();
        form.append('name', action.value.name);
        form.append('acronym', action.value.acronym);
        form.append('logo', action.value.logo, action.value.logo.name);
        return this.universityService.postUniversity(form).pipe(
          map((resp) => {
            return {
              type: UniversityActions.UNIVERSITIES_GET_ALL_REQUEST_ACTION,
            };
          })
        );
      })
    )
  );
}
