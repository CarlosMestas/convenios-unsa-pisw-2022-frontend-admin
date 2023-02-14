import { HttpClient } from '@angular/common/http';
import {IAdminData, ILoginAdmin} from './../../../shared/interfaces/admin.interface';
import { IHttpResponse, IHttpServiceResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import {Observable, map, catchError, BehaviorSubject, of} from 'rxjs';
import { AuthHelper } from './auth.helper';
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AppRoutingModule} from "@modules/main/app.routes";
import {AdminService} from "@core/services/admin/admin.service";

@Injectable({
  providedIn:"root"
})
export class AuthService extends AuthHelper{

  private user$:BehaviorSubject<IAdminData|null>;

  constructor(
    private router:Router,
    protected override http:HttpClient,
    private AdminService: AdminService,
  ){
    super(http)
    this.user$ = new BehaviorSubject<IAdminData|null>(null);
  }

  login(email:string, password:string):Observable<IHttpServiceResponse<IAdminData>>{
    const response:IHttpServiceResponse<IAdminData> = {
      error:false,
      msg:'',
      data:{} as IAdminData
    };
    return this.http.post<IHttpResponse<ILoginAdmin>>(
      this.url + AuthHelper.API_AUTH_SERVICE_ROUTES.LOGIN,
      {
        "email":email,
        "password":password
      }
      ).pipe(
        map( r =>{
            this.user$.next(r.data.user)
            response.data = r.data.user
            if (r.code == 400){
              response.error = true
            }
            this.saveLocalStorageSesionToken(r.data.token,r.data.user.id)

            return response
        }
        ),
        catchError(this.errorLogin)
      )
  }

  adminLogout():Observable<
    {
      error:boolean,
      msg:string
    }>{

    const response = {
      error:false,
      msg:''
    };
      this.removeLocalStorageSesion()
      this.user$.next(null)
      this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_LOGIN])
    return of(response)
  }

  isUserSigned():Observable<null|IHttpServiceResponse<IAdminData>>{
    let tempIsLocalStorage = this.getLocalStorageSesionId()
    if (tempIsLocalStorage!=null){
      return this.AdminService.getAdminById(+tempIsLocalStorage)
    }
    else { return of(null) }
  }

  getUserLoginToken():string|null|undefined {
    return this.getLocalStorageSesionToken()
  }

}
