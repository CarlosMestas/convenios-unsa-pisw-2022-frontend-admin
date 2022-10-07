import {map, catchError, Observable, BehaviorSubject} from 'rxjs';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminHelper } from './admin.helper';
import {IAdmin, IAdminCreate} from '@app/shared/interfaces/admin.interface';
import { AdminLogin } from '@app/shared/models/admin-login.model';
@Injectable({
  providedIn:"root"
})
export class AdminService extends AdminHelper{

  constructor(
    protected override http:HttpClient,

  ){
    super(http)
  }
  getAllAdmin():Observable<IHttpServiceResponse<IAdmin[]>>{

    const response:IHttpServiceResponse<IAdmin[]> = {
      error:false,
      msg:'',
      data:[]
    }

    return this.http.get<IHttpResponse<IAdmin[]>>(this.url + AdminHelper.API_ADMIN_SERVICE_ROUTES.ADMIN_GET_ALL)
    .pipe(
      map(resp =>{
        response.data = resp.data
        if(resp.data.length==0){
          response.data = [
            {
              id:1,
              name:"Juan",
              lastname:"Pérez",
              address:"Av. Brasil 512",
              phone:"+51 958277612",
              email:"juanpe@gmail.com",
              role:2
            },
            {
              id:2,
              name:"Martín",
              lastname:"Chávez",
              address:"Av. Ecuador 512",
              phone:"+51 958277612",
              email:"macha@gmail.com",
              role:2
            },
            {
              id:3,
              name:"Alberto",
              lastname:"Gómez",
              address:"Av. Venezuela 512",
              phone:"+51 958277612",
              email:"albgo@gmail.com",
              role:2
            },
            {
              id:4,
              name:"Pedro",
              lastname:"Ortiz",
              address:"Av. Chile 512",
              phone:"+51 958277612",
              email:"peort@gmail.com",
              role:2
            },
          ];
        }
        return response
      }
      ),
      catchError(this.getAllError)
    )
  }

  registerAdmin(adminCreate:IAdminCreate): Observable<IHttpServiceResponse<IAdmin>> {
    const response = {
      error:false,
      msg:'',
      data:{} as IAdmin
    };
    return this.http.post<IHttpResponse<{admin:IAdmin, token:string}>>(
      this.url+AdminHelper.API_ADMIN_SERVICE_ROUTES.ADMIN_CREATE,
      adminCreate
    )
    .pipe(
        map( resp =>{
          if(resp.code == 200){
            console.log("registro exitoso")
          }
          response.data = resp.data.admin
          return response
        }),
        catchError(this.errorSignUp)
      );
  }
}
