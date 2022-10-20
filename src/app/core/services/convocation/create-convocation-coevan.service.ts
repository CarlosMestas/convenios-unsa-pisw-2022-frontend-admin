import { IConvocationCoevanResponseDetail, IConvocationResponse } from './../../../shared/interfaces/convocation.interface';
import { IDocumentTypeResponse } from './../../../shared/interfaces/create-convocation-document.interface';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CreateConvocationCoevanHelper } from './create-convocation-coevan.helper';


@Injectable({
  providedIn:"root"
})
export class CreateConvocationCoevanService extends CreateConvocationCoevanHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  postCreateConvocationCoevan(coevanForm:FormData):Observable<IHttpServiceResponse<IConvocationCoevanResponseDetail>>{
    const response:IHttpServiceResponse<IConvocationCoevanResponseDetail> = {
      error:false,
      msg:'',
      data:{} as IConvocationCoevanResponseDetail
    }
    console.log("log coevan desde servicio: ", coevanForm.getAll("requirements"))
    return this.http.post<IHttpResponse<IConvocationCoevanResponseDetail>>(this.url + CreateConvocationCoevanHelper.API_ROUTES.CREATE_CONVOCATION_COEVAN_POST,coevanForm)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.postCreateConvocationCoevanError)
    )
  }
}
