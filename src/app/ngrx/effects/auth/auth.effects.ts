import { AdminActions } from './../../actions/admin/admin.actions';
import { adminAuthLoginSuccessAction } from './../../actions/auth/auth.actions';
import { AuthService } from './../../../core/services/auth/auth.service';
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Injectable } from "@angular/core"
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import { AdminAuthActions, adminAuthLoginRequestAction } from '@app/ngrx/actions/auth/auth.actions';


@Injectable(
)
export class AuthEffect{
  constructor(
    private actions$:Actions,
    private authService:AuthService//:TODO: we'll continue using our auth service
    ){
  }

  userAuthLoginRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminAuthLoginRequestAction), //TODO: Action who Excecuted this change
    mergeMap((action)=>this.authService.login(action.user,action.password)//TODO: return a user login confirmation
    .pipe(
      map(resp => ({
        type:AdminAuthActions.ADMIN_AUTH_LOGIN_SUCCESS,
        user:resp.data
      }
      )),
      catchError(()=>EMPTY)
    ))
  ))

  userAuthLoginSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminAuthLoginSuccessAction),
    mergeMap((action)=> of({
      type:AdminActions.ADMIN_GET_SUCCESS_ACTION,
      action
    })
    )
  ))

}
