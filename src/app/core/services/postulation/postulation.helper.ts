import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

export class PostulationHelper {
  protected static API_ROUTES = {
    POSTULATIONS_GET_BY_CONVOCATION: 'postulation-by-convocation',
  };

  public url = environment.url;
  public isProduction = environment.production;

  constructor(protected http: HttpClient) {}

  getPostulationsByConvocationError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error status :${error.status} \n message: ${error.message}`;
    }
    return of({
      error: true,
      msg: errorMessage,
      // data: [] as IUniversityResponse[]
      data: [
        {
          id: 0,
          lastname: '',
          name: '',
          birth_date: '',
          dni: '',
          city_region_postulant: '',
          cui: '',
          address: '',
          phone: '',
          email: '',
          emergency_contact: '',
          university_origin: '',
          web_page: '',
          city_region_university: '',
          faculty: {
            id: 1,
            name: '',
            acronym: '',
          },
          professional_program: {
            id: 1,
            name: '',
            acronym: '',
            faculty: 1,
          },
          current_cicle: {
            id: 1,
            description: '',
          },
          academic_year: {
            id: 1,
            description: '',
          },
          mean_grades: 0,
          total_credits: 0,
          coordinator: '',
          coordinator_cargue: '',
          coordinator_email: '',
        },
      ],
    });
  }
}
