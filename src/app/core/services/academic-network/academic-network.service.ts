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
        response.data = resp.data
        return response
      }
      ),
      catchError(this.getAllAcademicNetworkError)
    )
  }
}
