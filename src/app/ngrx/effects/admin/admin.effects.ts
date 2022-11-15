import { AdminActions, adminRegisterRequestAction } from './../../actions/admin/admin.actions';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Injectable } from "@angular/core"
import { AdminService } from '@app/core/services/admin/admin.service';
import { adminGetAllRequestAction } from '@app/ngrx/actions/admin/admin.actions';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import { unshowLoadComponentAction} from "@ngrx/actions/components/components.actions";

@Injectable()
export class AdminEffect{
  constructor(
    private store:Store<IAppState>,
    private actions$:Actions,
    private adminService:AdminService,//:TODO: we'll continue using our auth service
    private route:Router
    ){
  }

  adminGetAllRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminGetAllRequestAction),
    mergeMap(()=>this.adminService.getAllAdmin()
    .pipe(
      map(resp=>{
        return {
          type:AdminActions.ADMIN_GET_ALL_SUCCESS_ACTION,
          data:resp.data
        }
      }
      ),
      catchError(()=>EMPTY)
    )
    )
  ))

}
