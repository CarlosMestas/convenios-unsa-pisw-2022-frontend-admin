import { IConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import {
  IModalityConvocationResponse,
  ITypeConvocationResponse,
} from '../../../shared/interfaces/convocation.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

export class ConvocationGeneralHelper {
  public static API_ROUTES = {
    CREATE_CONVOCATION_GENERAL_POST: 'create-convocation',
    GET_ALL_CONVOCATION_GENERAL: 'convocations/all',
  };

  public url = environment.url;
  public isProduction = environment.production;

  constructor(protected http: HttpClient) {}

  postCreateConvocationGeneralError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error status :${error.status} \n message: ${error.message}`;
    }
    return of({
      error: true,
      msg: errorMessage,
      //data: {} as IConvocationResponse,
      data: {
        id: 0,
        title: '',
        type: 0,
        correlative: '',
        modality: 0,
        description: '',
        start_date: '',
        end_date: '',
        important_notes: '',
      },
    });
  }

  getAllConvocationGeneralError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error status :${error.status} \n message: ${error.message}`;
    }
    return of({
      error: true,
      msg: errorMessage,
      //data: {} as IConvocationResponse,
      data: [
        {
          id: 1,
          title: 'Convocatoria Ordinaria Estudiantes VAN',
          correlative: 'COEVAN-2022-B',
          type: 1,
          modality: 2,
          description: 'activo',
          start_date: '11/12/2022',
          end_date: '11/12/2022',
          important_notes: 'adawdw',
        },
        {
          id: 2,
          title: 'Convocatoria Ordinaria Estudiantes VAN',
          correlative: 'COEVAN-2022-A',
          type: 1,
          modality: 2,
          description: 'activo',
          start_date: '06/11/2022',
          end_date: '06/12/2022',
          important_notes: 'adawdw',
        },
      ],
    });
  }
}
