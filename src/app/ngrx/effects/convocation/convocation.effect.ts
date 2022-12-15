import { postCreateConvocationCoevanSuccessAction } from './../../actions/convocation/create-convocation-coevan.actions';
import { RequirementService } from './../../../core/services/requirement/requirement.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import {
  RequirementActions,
  requirementPostRequestAction,
  requirementsGetAllRequestAction,
} from '../../actions/convocation/requirement.actions';
import { ConvocationGeneralService } from '@app/core/services/convocation/convocation-general.service';
import {
  CreateConvocationCoevanActions,
  postCreateConvocationCoevanRequestAction,
} from '@app/ngrx/actions/convocation/create-convocation-coevan.actions';
import { ConvocationCoevanService } from '@app/core/services/convocation/convocation-coevan.service';
import {
  ConvocationGeneralActions,
  convocationGeneralGetAllRequestAction,
} from '@app/ngrx/actions/convocation/convocation-general.actions';

@Injectable()
export class ConvocationEffect {
  constructor(
    private actions$: Actions,
    private convocationGeneralService: ConvocationGeneralService
  ) {}

  convocationGeneralGetAllRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(convocationGeneralGetAllRequestAction),
      mergeMap((action) =>
        this.convocationGeneralService.getConvocationGeneralAll().pipe(
          map((data) => ({
            type: ConvocationGeneralActions.CONVOCATION_GENERAL_GET_ALL_SUCCESS_ACTION,
            data:data.data
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
