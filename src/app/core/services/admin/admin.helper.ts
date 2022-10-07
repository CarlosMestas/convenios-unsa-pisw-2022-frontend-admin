import { IAdminLogin } from './../../../shared/interfaces/auth.interface';
import {IAdmin, IAdminCreate} from './../../../shared/interfaces/admin.interface';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";
import { of } from 'rxjs';
import { AdminLogin } from '@app/shared/models/admin-login.model';

export class AdminHelper{
  public static SSK_ADMIN_TOKEN:string = "admin session storage key"
  public static SSK_ADMIN_CREDENTIALS:string = "admin session storage credentials"

  protected static API_ADMIN_SERVICE_ROUTES = {
    ADMIN_GET_ALL:"admins/all",
    ADMIN_CREATE:"admins/register"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [] as IAdmin[]
    })
  }

  errorSignUp(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IAdmin
    })
  }
  saveLocalStorageSesionToken(token:string, admin:string){
    localStorage.setItem(AdminHelper.SSK_ADMIN_TOKEN,token)
    localStorage.setItem(AdminHelper.SSK_ADMIN_CREDENTIALS,admin)
  }

  getToken(admin:IAdminLogin):string{
    return btoa(JSON.stringify(admin))
  }
  getAdminCreate(adminToken:string):IAdminLogin{
    let decodedtoken = atob(adminToken)
    console.log(decodedtoken)
    return new AdminLogin("","")
  }
}
