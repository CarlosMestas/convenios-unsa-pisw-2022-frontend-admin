import { HttpParams } from '@angular/common/http';
import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { map, catchError, Observable, BehaviorSubject } from 'rxjs';
import {
  IHttpServiceResponse,
  IHttpResponse,
} from './../../../shared/interfaces/transactions/http-response.transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostulationHelper } from './postulation.helper';
import { IPostulationCoevanResponseDetail } from '@app/shared/interfaces/postulation.interface';
@Injectable({
  providedIn: 'root',
})
export class PostulationService extends PostulationHelper {
  constructor(protected override http: HttpClient) {
    super(http);
  }
  getPostulationsByConvocation(
    id: number
  ): Observable<IHttpServiceResponse<IPostulationCoevanResponseDetail[]>> {
    const response: IHttpServiceResponse<IPostulationCoevanResponseDetail[]> = {
      error: false,
      msg: '',
      data: [],
    };
    let params = new HttpParams()
    params = params.set("id_convocation", id)
    return this.http
      .get<IHttpResponse<IPostulationCoevanResponseDetail[]>>(
        this.url +
          PostulationHelper.API_ROUTES.POSTULATIONS_GET_BY_CONVOCATION,{params})
      .pipe(
        map((resp) => {
          console.log("postulations:",resp.data)
          response.data = resp.data;
          return response;
        }),
        catchError(this.getPostulationsByConvocationError)
      );
  }

  getPostulationById(id:number):Observable<
  IHttpServiceResponse<IPostulationCoevanResponseDetail>>{

    const response = {
      error:false,
      msg:'',
      data:{} as IPostulationCoevanResponseDetail
    };

    let params:HttpParams = new HttpParams()
    params = params.set("id",id)
    return this.http.get<IHttpResponse<IPostulationCoevanResponseDetail>>(this.url + PostulationHelper.API_ROUTES.GET_POSTULATION, {params})
    .pipe(
      map( r =>{
        response.data = r.data;
        return response;
      }),
      catchError(this.error)
    );
  }
}
