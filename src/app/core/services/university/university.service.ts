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


    console.log("id de red académica:", id)
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
        console.log("university by academic network:", resp.data)
        return response
      }
      ),
      catchError(this.getUniversityByAcademicNetworkError)
    )
  }

  getAllUniversity():Observable<IHttpServiceResponse<IUniversityResponse[]>>{

    const response:IHttpServiceResponse<IUniversityResponse[]> = {
      error:false,
      msg:'',
      data:[]
    }

    return this.http.get<IHttpResponse<IUniversityResponse[]>>(
      this.url + UniversityHelper.API_ROUTES.UNIVERSITY_GET_ALL
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

  postUniversity(form:FormData):Observable<IHttpServiceResponse<IUniversityResponse>>{
    const response:IHttpServiceResponse<IUniversityResponse> = {
      error:false,
      msg:'',
      data:{} as IUniversityResponse
    };

    return this.http.post<IHttpResponse<IUniversityResponse>>(this.url + UniversityHelper.API_ROUTES.UNIVERSITY_POST,form)
    .pipe(
      map( resp=>{
          console.log(resp)
          response.data=resp.data
          return response
        }
      ),
      catchError(this.errorPost)
    )
  }
}
