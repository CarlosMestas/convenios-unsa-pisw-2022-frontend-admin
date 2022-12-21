import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { IAcademicNetworkResponse } from './../../../shared/interfaces/academic-network.interface';
import {map, catchError, Observable, BehaviorSubject} from 'rxjs';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcademicNetworkHelper } from './academic-network.helper';
@Injectable({
  providedIn:"root"
})
export class AcademicNetworkService extends AcademicNetworkHelper{

  constructor(
    protected override http:HttpClient

  ){
    super(http)
  }
  getAllAcademicNetwork():Observable<IHttpServiceResponse<IAcademicNetworkResponse[]>>{

    const response:IHttpServiceResponse<IAcademicNetworkResponse[]> = {
      error:false,
      msg:'',
      data:[]
    }

    return this.http.get<IHttpResponse<IAcademicNetworkResponse[]>>(
      this.url + AcademicNetworkHelper.API_ROUTES.ACADEMIC_NETWORK_GET_ALL
    )
    .pipe(
      map(resp =>{
        console.log("academic networks: ",resp.data)
        response.data = resp.data
        return response
      }
      ),
      catchError(this.getAllAcademicNetworkError)
    )
  }

  postAcademicNetwork(form:FormData):Observable<IHttpServiceResponse<IAcademicNetworkResponse>>{
    const response:IHttpServiceResponse<IAcademicNetworkResponse> = {
      error:false,
      msg:'',
      data:{} as IAcademicNetworkResponse
    };

    return this.http.post<IHttpResponse<IAcademicNetworkResponse>>(this.url + AcademicNetworkHelper.API_ROUTES.ACADEMIC_NETWORK_POST,form)
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

  asignAcademicNetwork(form:FormData):Observable<IHttpServiceResponse<IAcademicNetworkResponse>>{
    const response:IHttpServiceResponse<IAcademicNetworkResponse> = {
      error:false,
      msg:'',
      data:{} as IAcademicNetworkResponse
    };

    return this.http.post<IHttpResponse<IAcademicNetworkResponse>>(this.url + AcademicNetworkHelper.API_ROUTES.ASIGN_ACADEMIC_NETWORK,form)
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
