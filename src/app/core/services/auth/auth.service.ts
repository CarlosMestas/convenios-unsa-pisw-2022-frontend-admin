import { HttpClient } from '@angular/common/http';
import {IAdmin, IAdminData, ILoginAdmin} from './../../../shared/interfaces/admin.interface';
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

  login(user:string, password:String):Observable<IHttpServiceResponse<IAdminData>>{
    const response:IHttpServiceResponse<IAdminData> = {
      error:false,
      msg:'',
      data:{} as IAdminData
    };
    return this.http.post<IHttpResponse<ILoginAdmin>>(
      this.url + AuthHelper.API_AUTH_SERVICE_ROUTES.LOGIN,
      {
        "email":user,
        "password":password
      }
      ).pipe(
        map( r =>{
          //response.msg = r.msg
          response.data = r.data.user
          if (r.code == 400){
            response.error = true
          }
          response.data = r.data
          return response
        }
        ),
        catchError(this.errorLogin)
      )
  }
}
