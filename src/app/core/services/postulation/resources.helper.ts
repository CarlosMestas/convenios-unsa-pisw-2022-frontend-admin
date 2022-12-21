import { environment } from 'environments/environment';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';
environment
export class ResourcesHelper {
  public url = environment.url
  public isProduction = environment.production
  constructor(
    protected http:HttpClient
  ){}


  errorFile(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as File
    })
  }
}
