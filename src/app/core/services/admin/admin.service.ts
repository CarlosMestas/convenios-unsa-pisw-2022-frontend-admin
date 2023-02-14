import {map, catchError, Observable, BehaviorSubject, Subject} from 'rxjs';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminHelper } from './admin.helper';
import {IAdmin, IAdminCreate, IAdminData} from '@app/shared/interfaces/admin.interface';
import { AdminLogin } from '@app/shared/models/admin-login.model';
@Injectable({
  providedIn:"root"
})
export class AdminService extends AdminHelper{
  listAdmins = new Subject<IAdmin[]>()
  constructor(
    protected override http:HttpClient,

  ){
    super(http)
  }

  getAdminById(idAdmin: number):Observable<IHttpServiceResponse<IAdminData>>{
    const response:IHttpServiceResponse<IAdminData> = {
      error:false,
      msg:'',
      data: {} as IAdminData
    }
    return this.http.get<IHttpResponse<IAdminData>>(this.url + AdminHelper.API_ADMIN_SERVICE_ROUTES.ADMIN_GET_BY_ID+'?id=' + idAdmin)
      .pipe(
        map(resp =>{
          if(resp.code == 200){
            response.data = resp.data
          } else {
            console.log("Error en obtener datos")
          }
            return response
          }
        ),
        catchError(this.errorGet)
      )
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
        this.listAdmins.next(resp.data)
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
            this.getAllAdmin()
          }
          response.data = resp.data.admin
          return response
        }),
        catchError(this.errorSignUp)
      );
  }

  updateAdmin(adminCreate:IAdminCreate, idAdmin: number): Observable<IHttpServiceResponse<IAdmin>> {
    const response = {
      error:false,
      msg:'',
      data:{} as IAdmin
    };
    return this.http.put<IHttpResponse<{admin:IAdmin, token:string}>>(
      this.url+AdminHelper.API_ADMIN_SERVICE_ROUTES.ADMIN_UPDATE + '/' + idAdmin,
      adminCreate
    )
      .pipe(
        map( resp =>{
          if(resp.code == 200){
            response.data = resp.data.admin
          }
          return response
        }),
        catchError(this.errorSignUp)
      );
  }

  deleteAdmin(idAdmin: number):  Observable<IHttpServiceResponse<any>>{
    const response = {
      error:false,
      msg:'',
      data: ''
    };

    return this.http.delete<IHttpResponse<any>>(
      this.url+AdminHelper.API_ADMIN_SERVICE_ROUTES.ADMIN_DELETE + '/' + idAdmin
    )
      .pipe(
        map( resp =>{
          if(resp.code == 200){
            this.getAllAdmin()
          }
          return response
        }),
        catchError(this.errorSignUp)
      );
  }
}
