import { IRequirementResponse } from './../../../shared/interfaces/requirement.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from "environments/environment"
import { of } from "rxjs"

export class RequirementHelper{
  public url = environment.url
  public isProduction = environment.production

  public static API_ROUTES ={
    POST_REQUIREMENT:"requirements",
    GET_ALL_REQUIREMENTS:"requirements",
    GET_REQUIREMENTS_BY_CONVOCATION_ID:"requirements"
  }

  constructor(
    protected http:HttpClient
  ){}

  requirementError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IRequirementResponse
    })
  }
  getAllRequirementsError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IRequirementResponse[]
    })
  }
}
