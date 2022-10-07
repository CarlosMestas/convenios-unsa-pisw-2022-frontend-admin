import { AdminActions, adminRegisterRequestAction } from './../../actions/admin/admin.actions';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Injectable } from "@angular/core"
import { adminGetAllRequestAction } from '@app/ngrx/actions/admin/admin.actions';
import { RoleService } from '@app/core/services/roles/role.service';
import { RolesActions, rolesGetAllRequestAction } from '@app/ngrx/actions/role/role.actions';


@Injectable()
export class RoleEffect{
  constructor(
    private actions$:Actions,
    private roleService:RoleService//:TODO: we'll continue using our auth service
    ){
  }

  rolesGetAllRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(rolesGetAllRequestAction),
    mergeMap(()=>this.roleService.getAllAdminRoles()
    .pipe(
      map(resp=>{
        return {
          type:RolesActions.ROLES_GET_ALL_SUCCESS_ACTION,
          data:resp.data
        }
      }
      ),
      catchError(()=>EMPTY)
    )
    )
  ))


}
