import { IRole } from './../../../shared/interfaces/role.interface';
import { IAdminLogin } from './../../../shared/interfaces/auth.interface';
import {IAdmin, IAdminCreate} from './../../../shared/interfaces/admin.interface';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";
import { of } from 'rxjs';
import { AdminLogin } from '@app/shared/models/admin-login.model';

export class RoleHelper{


  protected static API_ADMIN_ROLE_SERVICE_ROUTES = {
    ADMIN_ROLES_GET_ALL:"admin-roles/all",
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllRolesError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [] as IRole[]
    })
  }


}
