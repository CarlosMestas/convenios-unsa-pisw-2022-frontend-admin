import { IRole } from './../../../shared/interfaces/role.interface';
import {map, catchError, Observable} from 'rxjs';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ExternalStudentsHelper} from './external-students.helper';
import {IExternalStudent} from "@shared/interfaces/external-student.interface";
@Injectable({
  providedIn:"root"
})
export class ExternalStudentsService extends ExternalStudentsHelper{

  constructor(
    protected override http:HttpClient

  ){
    super(http)
  }
  getAllRequestExternalStudents():Observable<IHttpServiceResponse<IExternalStudent[]>>{

    const response:IHttpServiceResponse<IExternalStudent[]> = {
      error:false,
      msg:'',
      data:[]
    }

    return this.http.get<IHttpResponse<IExternalStudent[]>>(
      this.url + ExternalStudentsHelper.API_EXTERNAL_STUDENTS_SERVICE_ROUTES.GET_ALL_REQUEST
      )
    .pipe(
      map(resp =>{
        response.data = resp.data
        return response
      }
      ),
      catchError(this.getAllRequestError)
    )
  }
}
