import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "environments/environment";
import { of } from 'rxjs';

export class UniversityHelper{

  protected static API_ROUTES = {
    UNIVERSITY_GET_ALL:"get-all-universities",
    UNIVERSITY_GET_BY_ACADEMIC_NETWORK:"get-universities-by-academic-network",
    UNIVERSITY_POST:""
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getUniversityByAcademicNetworkError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      // data: [] as IUniversityResponse[]
      data:[
        {
          id:1,
          name:"Universidad Nacional de San Agustín",
          acronym:"UNSA",
          logo:""
        },
        {
          id:1,
          name:"Universidad Católica de santa maría",
          acronym:"UCSM",
          logo:""
        },
        {
          id:1,
          name:"Universidad Nacional de Ingenierías",
          acronym:"UNI",
          logo:""
        },
        {
          id:1,
          name:"Universidad Nacional Mayor de San Marcos",
          acronym:"UNMSM",
          logo:""
        }
    ]
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
      data: {} as IUniversityResponse
    })
  }


}
