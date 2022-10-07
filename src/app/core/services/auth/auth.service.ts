import { HttpClient } from '@angular/common/http';
import { IAdmin } from './../../../shared/interfaces/admin.interface';
import { IHttpResponse, IHttpServiceResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { Observable, map, catchError } from 'rxjs';
import { AuthHelper } from './auth.helper';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn:"root"
})
export class AuthService extends AuthHelper{

  constructor(
    protected override http:HttpClient,
  ){
    super(http)
  }

  login(user:string, password:String):Observable<IHttpServiceResponse<IAdmin>>{
    const response:IHttpServiceResponse<IAdmin> = {
      error:false,
      msg:'',
      data:{} as IAdmin
    };
    return this.http.post<IHttpResponse<IAdmin>>(
      this.url + AuthHelper.API_AUTH_SERVICE_ROUTES.LOGIN,
      {
        "user":user,
        "password":password
      }
      ).pipe(
        map( r =>{
          response.data = r.data
          return response
        }
        ),
        catchError(this.errorLogin)
      )
  }
}
