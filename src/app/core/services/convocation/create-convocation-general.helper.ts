import { IConvocationResponse } from './../../../shared/interfaces/convocation.interface';
import { IModalityConvocationResponse, ITypeConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from "environments/environment"
import { of } from 'rxjs';


export class CreateConvocationGeneralHelper{


  public static API_ROUTES = {
    CREATE_CONVOCATION_GENERAL_POST:"create-convocation"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  postCreateConvocationGeneralError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      //data: {} as IConvocationResponse,
      data:
        {
          id: 0,
          title: '',
          type: 0,
          correlative: '',
          modality: 0,
          description: '',
          start_date: '',
          end_date: '',
          important_notes: ''
        }
    })
  }


}
