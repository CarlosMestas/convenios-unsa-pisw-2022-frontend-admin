import { IDocumentTypeResponse } from './../../../shared/interfaces/create-convocation-document.interface';
import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CreateConvocationLinkHelper } from './create-convocation-link.helper';
import { ILinkTypeResponse } from '@app/shared/interfaces/create-convocation-link.interface';


@Injectable({
  providedIn:"root"
})
export class CreateConvocationLinkService extends CreateConvocationLinkHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  getAllCreateConvocationLinkTypes():Observable<IHttpServiceResponse<ILinkTypeResponse[]>>{
    const response:IHttpServiceResponse<ILinkTypeResponse[]> = {
      error:false,
      msg:'',
      data:[]
    }
    return this.http.get<IHttpResponse<ILinkTypeResponse[]>>(this.url + CreateConvocationLinkHelper.API_ROUTES.CREATE_CONVOCATION_LINK_TYPE_GET_ALL)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllCreateConvocationLinkTypesError)
    )
  }
}
