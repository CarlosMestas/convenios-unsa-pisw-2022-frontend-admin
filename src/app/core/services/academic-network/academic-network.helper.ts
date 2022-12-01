import { IAcademicNetworkResponse } from './../../../shared/interfaces/academic-network.interface';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";
import { of } from 'rxjs';

export class AcademicNetworkHelper{

  protected static API_ROUTES = {
    ACADEMIC_NETWORK_GET_ALL:"get-all-academic-networks",
    ACADEMIC_NETWORK_POST:""
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllAcademicNetworkError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [] as IAcademicNetworkResponse[]
    })
  }

  errorPost(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IAcademicNetworkResponse
    })
  }

}
