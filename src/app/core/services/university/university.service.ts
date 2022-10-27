import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import {map, catchError, Observable, BehaviorSubject} from 'rxjs';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityHelper } from './university.helper';
@Injectable({
  providedIn:"root"
})
export class UniversityService extends UniversityHelper{

  constructor(
    protected override http:HttpClient

  ){
    super(http)
  }
  getUniversityByAcademicNetwork(id:number):Observable<IHttpServiceResponse<IUniversityResponse[]>>{

    const response:IHttpServiceResponse<IUniversityResponse[]> = {
      error:false,
      msg:'',
      data:[]

    }

    return this.http.get<IHttpResponse<IUniversityResponse[]>>(
      this.url + UniversityHelper.API_ROUTES.UNIVERSITY_GET_BY_ACADEMIC_NETWORK + "?id="+id
    )
    .pipe(
      map(resp =>{
        response.data = resp.data
        return response
      }
      ),
      catchError(this.getUniversityByAcademicNetworkError)
    )
  }
}
