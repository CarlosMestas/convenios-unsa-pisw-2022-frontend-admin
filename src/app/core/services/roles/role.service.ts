import { IRole } from './../../../shared/interfaces/role.interface';
import {map, catchError, Observable, BehaviorSubject} from 'rxjs';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IAdmin, IAdminCreate} from '@app/shared/interfaces/admin.interface';
import { AdminLogin } from '@app/shared/models/admin-login.model';
import { RoleHelper } from './role.helper';
@Injectable({
  providedIn:"root"
})
export class RoleService extends RoleHelper{

  constructor(
    protected override http:HttpClient,

  ){
    super(http)
  }
  getAllAdminRoles():Observable<IHttpServiceResponse<IRole[]>>{

    const response:IHttpServiceResponse<IRole[]> = {
      error:false,
      msg:'',
      data:[]
    }

    return this.http.get<IHttpResponse<IRole[]>>(
      this.url + RoleHelper.API_ADMIN_ROLE_SERVICE_ROUTES.ADMIN_ROLES_GET_ALL
      )
    .pipe(
      map(resp =>{
        response.data = resp.data

        return response
      }
      ),
      catchError(this.getAllRolesError)
    )
  }
}
