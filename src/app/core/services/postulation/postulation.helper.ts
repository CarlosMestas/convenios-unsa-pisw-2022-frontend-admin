import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';
import { IPostulationCoevanResponseDetail } from '@app/shared/interfaces/postulation.interface';
import { ENUMPostulationCoevanStatus } from '@app/shared/interfaces/enum/convocation.enum';

export class PostulationHelper {
  protected static API_ROUTES = {
    POSTULATIONS_GET_BY_CONVOCATION: 'postulation-by-convocation',
  };

  public url = environment.url;
  public isProduction = environment.production;

  constructor(protected http: HttpClient) {}

  getPostulationsByConvocationError(error: HttpErrorResponse) {
    let dataTest:IPostulationCoevanResponseDetail = {
      id_convocation: 1,
      id: 1,
      id_user: 1,
      photo: '',
      lastname: 'Perez',
      name: 'Juan',
      birth_date: '19/08/2000',
      dni: '84646213',
      city_region_postulant: 'Arequipa/Arequipa',
      cui: '213123421',
      current_address: 'Villa la mar',
      phone: '123141242',
      email: 'kticllahuanaco@unsa.edu.pe',
      contact_emergency_number: '123123213',
      origin_university: {
        id:1,
        name:"Universidad Nacional de san Agustín",
        acronym:"UNSA",
        logo:""
      },
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
      postulation_document: '',
      last_update: '',
      courses: [],
      post_state: {
        id:ENUMPostulationCoevanStatus.ENVIADO,
        name:"Enviado",
        description:"El usuario postulante envió su postulación"
      }
    }
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
      data: [dataTest],
    });
  }
}
