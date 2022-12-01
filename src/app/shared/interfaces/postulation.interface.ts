import { IAcademicYearResponse } from './academic-year.interface';
import { ICycleResponse } from './cycle.interface';
import { IProfessionalProgramsResponse } from './professional-program.interface';
import { IFacultyResponse } from './faculties.interface';
export interface IPostulationCoevanResponse{
  id:number,
  lastname:string,
  name:string,
  birth_date:string,
  dni:string,
  city_region_postulant:string,
  cui:string,
  address:string,
  phone:string,
  email:string,
  emergency_contact:string
  university_origin:string,
  web_page:string,
  city_region_university:string,
  faculty:IFacultyResponse,
  professional_program:IProfessionalProgramsResponse,
  current_cicle:ICycleResponse,
  academic_year:IAcademicYearResponse,
  mean_grades:number,
  total_credits:number,
  coordinator:string,
  coordinator_cargue:string,
  coordinator_email:string,
}
