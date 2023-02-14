import { IHttpServiceResponse, IHttpResponse } from './../../../shared/interfaces/transactions/http-response.transaction';
import { IRequirementResponse } from './../../../shared/interfaces/requirement.interface';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { RequirementHelper } from "./requirement.helper";


@Injectable({
  providedIn:'root'
})
export class RequirementService extends RequirementHelper{

  constructor(protected override http:HttpClient){
    super(http)
  }

  getAllRequirements():Observable<IHttpServiceResponse<IRequirementResponse[]>>{
    const response:IHttpServiceResponse<IRequirementResponse[]> = {
      error:false,
      msg:'',
      data:{} as IRequirementResponse[]
    };

    return this.http.get<IHttpResponse<IRequirementResponse[]>>(this.url+ RequirementHelper.API_ROUTES.GET_ALL_REQUIREMENTS)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllRequirementsError)
    )
  }

  getRequirementsByConvocationId(id:number):Observable<IHttpServiceResponse<IRequirementResponse[]>>{
    const response:IHttpServiceResponse<IRequirementResponse[]> = {
      error:false,
      msg:'',
      data:{} as IRequirementResponse[]
    };

    const params:HttpParams = new HttpParams()
    params.set("id",id)
    return this.http.get<IHttpResponse<IRequirementResponse[]>>(this.url+ RequirementHelper.API_ROUTES.GET_REQUIREMENTS_BY_CONVOCATION_ID,{params})
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllRequirementsError)
    )

  }
  postRequirement(requirement:string):Observable<IHttpServiceResponse<IRequirementResponse>>{
    const response:IHttpServiceResponse<IRequirementResponse> = {
      error:false,
      msg:'',
      data:{} as IRequirementResponse
    };

    return this.http.post<IHttpResponse<IRequirementResponse>>(this.url + RequirementHelper.API_ROUTES.POST_REQUIREMENT,{"description":requirement})
    .pipe(
      map( resp=>{
          console.log(resp)
          response.data=resp.data
          return response
        }
      ),
      catchError(this.requirementError)
    )
  }
}

