import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { IAcademicNetworkResponse } from './../../../shared/interfaces/academic-network.interface';
import { IConvocationCoevanResponseDetail, IConvocationResponse, IConvocationResponseDetail } from './../../../shared/interfaces/convocation.interface';
import { IModalityConvocationResponse, ITypeConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from "environments/environment"
import { of } from 'rxjs';
import { IDocumentResponseDetail } from '@app/shared/interfaces/create-convocation-document.interface';


export class CreateConvocationCoevanHelper{


  protected static API_ROUTES = {
    CREATE_CONVOCATION_COEVAN_POST:""
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  postCreateConvocationCoevanError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      //data: {} as IConvocationCoevanResponseDetail,
      data:
        {
          id: 1,
          convocation: {} as IConvocationResponseDetail,
          academicNetwork: {} as IAcademicNetworkResponse,
          university: {} as IUniversityResponse,
          documents: [],
          links: [],
          requirements: []
        }
    })
  }


}
