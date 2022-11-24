import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";
import { of } from 'rxjs';
import {IExternalStudent} from "@shared/interfaces/external-student.interface";

export class ExternalStudentsHelper{


  protected static API_EXTERNAL_STUDENTS_SERVICE_ROUTES = {
    GET_ALL_REQUEST:"external-students/all",
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllRequestError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [] as IExternalStudent[]
    })
  }


}
