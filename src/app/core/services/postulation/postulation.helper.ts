import { IUniversityResponse } from './../../../shared/interfaces/university.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';
import { IPostulationCoevanResponseDetail } from '@app/shared/interfaces/postulation.interface';
import { ENUMPostulationCoevanStatus } from '@app/shared/interfaces/enum/convocation.enum';

export class PostulationHelper {
  protected static API_ROUTES = {
    POSTULATIONS_GET_BY_CONVOCATION: 'postulation-by-convocation',
    GET_POSTULATION:"postulation",
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

  error(error:HttpErrorResponse){
    let dataTest:IPostulationCoevanResponseDetail ={
      id_convocation: 1,
      id_user:1,
      id: 1,
      photo:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastname: 'Pérez',
      name: 'Juan',
      birth_date: '09/19/1998',
      dni: '75968425',
      city_region_postulant: 'Arequipa/Perú',
      cui: '20176548',
      current_address: 'Villa la mar',
      phone: '985643213',
      email: 'jperez@unsa.edu.pe',
      contact_emergency_number: '983614311',
      origin_university: {
        id:1,
        name:"Universidad Nacional de San Agustín",
        acronym:"UNSA",
        logo:"https://upload.wikimedia.org/wikipedia/commons/3/3a/LOGO_UNSA.png"
      },
      web_page: 'https://www.unsa.edu.pe/',
      city_region_university: 'Arequipa/Perú',
      faculty: {
        id:1,
        name:"Facultad de Ingenieria de Procesos",
        acronym:"FIP"
      },
      professional_program: {
        id:1,
        name:"Programa Profesional de Quimica",
        acronym:"PPQ",
        faculty:1
      },
      current_cicle: {
        id:1,
        description:"1er ciclo"
      },
      academic_year: {
        id:1,
        description:"1er año"
      },
      mean_grades: 12,
      total_credits: 200,
      coordinator: 'Dra. María del Pilar Guillén Núñez',
      coordinator_cargue: 'Jefa de la Oficina Universitaria de Cooperación, Convenios, Relaciones Internacionales, Becas y Pasantías de la UNSA',
      coordinator_email: 'convenios@unsa.edu.pe',
      postulation_document: "https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
      last_update: '12/12/2022, 1:50:48 PM',
      courses: [
        {
          id:1,
          number_credits:4,
          course_code:"445132",
          unsa_course_name:"Introducción al desarrollo de juegos",
          year:"4ro",
          semester:"par",
          target_university_course_name:"Desarrollo de juegos"
        }
      ],
      post_state: {
        id:ENUMPostulationCoevanStatus.SIN_ENVIAR,
        name:"Sin enviar",
        description:"El usuario postulante guardó la información en su formulario, pero no envió aún su postulación"
      }
    }

    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: dataTest
    })
  }
}
