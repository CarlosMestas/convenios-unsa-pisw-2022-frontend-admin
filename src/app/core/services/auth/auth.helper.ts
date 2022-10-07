import { IAdmin } from './../../../shared/interfaces/admin.interface';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";

export class AuthHelper{

  public static ADMIN_LOGIN_TOKEN:string = "userLoginToken";
  protected static API_AUTH_SERVICE_ROUTES = {
    LOGOUT:"logout",
    LOGIN:"login"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }
  error<T>(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as T
    })
  }
  errorLogin(error:HttpErrorResponse){
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
}
