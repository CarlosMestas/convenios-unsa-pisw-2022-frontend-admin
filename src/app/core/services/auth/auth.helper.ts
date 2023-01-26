import {IAdmin, IAdminData, ILoginAdmin} from './../../../shared/interfaces/admin.interface';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";

export class AuthHelper{

  public static USER_LOGIN_TOKEN:string = "userLoginToken";
  public static USER_ID_ENCODED:string = "userIdCoded";
  protected static API_AUTH_SERVICE_ROUTES = {
    LOGOUT:"admins/logout",
    LOGIN:"admins/login"
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
      data: {} as IAdminData
    })
  }

  errorLogout(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage
    })
  }
  /**
   * Delete user session from local storage
   */
  removeLocalStorageSesion(){
    localStorage.removeItem(AuthHelper.USER_LOGIN_TOKEN)
    localStorage.removeItem(AuthHelper.USER_ID_ENCODED)
  }

  //INSTEAD
  saveLocalStorageSesionToken(token:string, adminId:number){
    localStorage.setItem(AuthHelper.USER_LOGIN_TOKEN,token)
    localStorage.setItem(AuthHelper.USER_ID_ENCODED,adminId.toString())
  }
  getLocalStorageSesionToken():string|null{
    return localStorage.getItem(AuthHelper.USER_LOGIN_TOKEN)
  }
  getLocalStorageSesionId():string|null{
    return localStorage.getItem(AuthHelper.USER_ID_ENCODED)
  }

}
