import { ENUMPostulationCoevanStatus } from './enum/convocation.enum';
import { IUniversityResponse } from './university.interface';
import { IAcademicYearResponse } from './academic-year.interface';
import { ICycleResponse } from './cycle.interface';
import { IProfessionalProgramResponse } from './professional-program.interface';
import { IFacultyResponse } from './faculties.interface';
import { IPostulationCoevanCourseResponseDetail } from './coevan-courses.interface';
export interface IPostulationCoevanResponseDetail{
  id_convocation:number,
  id:number,
  id_user:number,
  photo:string,
  lastname:string,
  name:string,
  birth_date:string,
  dni:string,
  city_region_postulant:string,
  cui:string,
  current_address:string,
  phone:string,
  email:string,
  contact_emergency_number:string
  origin_university:IUniversityResponse,
  web_page:string,
  city_region_university:string,
  faculty:IFacultyResponse,
  professional_program:IProfessionalProgramResponse,
  current_cicle:ICycleResponse,
  academic_year:IAcademicYearResponse,
  mean_grades:number,
  total_credits:number,
  coordinator:string,
  coordinator_cargue:string,
  coordinator_email:string,
  postulation_document:string,
  last_update:string,
  courses:IPostulationCoevanCourseResponseDetail[],
  post_state:IPostulationCoevanStatusResponse
}

export interface IPostulationCoevanStatusResponse{
  id:ENUMPostulationCoevanStatus,
  name:string,
  description:string
}
