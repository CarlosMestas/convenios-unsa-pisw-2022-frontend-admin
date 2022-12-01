import { IConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import { IDocumentTypeResponse } from '../../../shared/interfaces/create-convocation-document.interface';
import { IHttpServiceResponse, IHttpResponse } from '../../../shared/interfaces/transactions/http-response.transaction';
import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ConvocationGeneralHelper } from './convocation-general.helper';


@Injectable({
  providedIn:"root"
})
export class ConvocationGeneralService extends ConvocationGeneralHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  postCreateConvocationGeneral(generalForm:FormData):Observable<IHttpServiceResponse<IConvocationResponse>>{
    const response:IHttpServiceResponse<IConvocationResponse> = {
      error:false,
      msg:'',
      data:{} as IConvocationResponse
    }

    return this.http.post<IHttpResponse<IConvocationResponse>>(this.url + ConvocationGeneralHelper.API_ROUTES.CREATE_CONVOCATION_GENERAL_POST,generalForm)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.postCreateConvocationGeneralError)
    )
  }

  getConvocationGeneralAll():Observable<IHttpServiceResponse<IConvocationResponse[]>>{
    const response:IHttpServiceResponse<IConvocationResponse[]> = {
      error:false,
      msg:'',
      data:{} as IConvocationResponse[]
    }

    return this.http.get<IHttpResponse<IConvocationResponse[]>>(this.url + ConvocationGeneralHelper.API_ROUTES.GET_ALL_CONVOCATION_GENERAL)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllConvocationGeneralError)
    )
  }
}
