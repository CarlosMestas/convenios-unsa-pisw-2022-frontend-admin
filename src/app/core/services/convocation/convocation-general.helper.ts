import { IConvocationResponseDetail, IConvocationCoevanResponseDetail } from './../../../shared/interfaces/convocation.interface';
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
    GET_CONVOCATION: 'convocations',
    GET_CONVOCATION_COEVAN:"get-convocation-coevan-detail",
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
      data: [],
    });
  }
  error(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IConvocationResponseDetail
    })
  }
  errorCoevan(error:HttpErrorResponse){
    let dataTest:IConvocationCoevanResponseDetail={
      id: 1,
      academicNetwork: {
        id: 1,
        name:"Red peruana de Universidades",
        acronym:"RPU",
        description:"Descripci??n de la red acad??mica",
        logo:""
      },
      university: {
        id:1,
        name:"Universidad Nacional de San Agust??n",
        acronym:"UNSA",
        logo:""
      },
      documents: [{
        id:1,
        name:"Formulario de Universidad Destino",
        type:{
          id:1,
          name:"Formulario de Universidad Destino",
          category:""
        },
        url:"https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
        description:"Documento el cual debe ser completado y enviado, ya que es necesario para enviar su postulaci??n a la universidad de destino"
      },
      {
        id:2,
        name:"Oferta Acad??mica de Universidad Destino",
        type:{
          id:2,
          name:"Oferta Acad??mica",
          category:""
        },
        url:"https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
        description:"Documento debe ser revisado y en base a ello decidir cuales son los cursos de planea llevar en la universidad de destino"
      }
    ],
      links: [{
        id:1,
        name:"Formulario de Universidad Destino",
        type:{
          id:1,
          name:"Formulario de Universidad Destino",
          category:"postulaci??n"
        },
        url:"https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
        description:"Documento el cual debe ser firmado"
      }],
      requirements: [{
        id:1,
        description:"Debe pertenecer a quinto superior"
      }],
      semester:"2022-A",
      avaltext:"La autoridad abajo firmante avala la postulaci??n del estudiante Agustino: <STUDENT_LASTNAME>, <STUDENT_NAME>, para que efect??e el semestre acad??mico <SEMESTER>, a trav??s del programa de intercambio estudiantil <ACADEMIC_NETWORK_ACRONYM> en la <UNIVERSITY_TARGET>, a desarrollarse durante el semestre acad??mico <SEMESTER>, tras considerar que la Movilidad Acad??mica a efectuar ser?? "+
      " de gran utilidad para su desarrollo profesional, y un significativo aporte para su perfil de egresado.",
      coursestext:"Como responsable acad??mico de la facultad <FACULTY>/<PROFESSIONAL_PROGRAM> de la UNSA, doy mi conformidad de los cursos a llevarse de manera <MODALITY> para efectos de reconocimiento o capacitaci??n, siempre y cuando el estudiante los apruebe en la <UNIVERSITY_TARGET>, donde efectuar?? movilidad acad??mica <MODALITY> en el Marco de la <ACADEMIC_NETWORK_NAME> ??? <ACADEMIC_NETWORK_ACRONYM>",
      commitment:"Acepto las condiciones del <ACADEMIC_NETWORK_NAME> <ACADEMIC_NETWORK_ACRONYM> <SEMESTER>, y me comprometo a cumplir las siguientes cl??usulas, en caso de ser seleccionado: \n"+

      "Comunicar en forma expresa (email), la aceptaci??n de la beca a la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM> dentro del plazo que se indique en cada convocatoria. \n"+

      "Realizar las actividades acad??micas que, en el marco del plan de estudios, recomiende el Coordinador de la carrera correspondiente, y aceptar todas las actuaciones de seguimiento, control, y evaluaci??n establecidas por la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM>. \n"+

      "Presentarme con el Coordinador del Programa de Intercambio <MODALITY> de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM> y presentar toda la documentaci??n requerida para mi inscripci??n como alumno de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM>.\n"+

      "En caso de un cambio en el contrato acad??mico original, enviar por correo electr??nico al coordinador UNSA, los datos de las nuevas materias a cursar en la universidad de destino (actualizado y avalado), para que se considere su reconocimiento o convalidaci??n. Se establece para este tr??mite un plazo no mayor de 30 d??as transcurridos despu??s del inicio de clases en la universidad de destino. Luego de ello, cualquier tr??mite de retiro de curso, cambio de curso u otra modificaci??n para la regularizaci??n acad??mica, ser?? considerado por la OUCCRIBP el tr??mite como extempor??neo, debiendo asumir el estudiante las consecuencias acad??micas del caso.\n" +

      "Completado el Intercambio Acad??mico <MODALITY>, el estudiante deber?? presentar un informe escrito a la UNSA, dentro de los 30 d??as de culminado el programa, con copia a la Escuela Profesional. \n"+

      "Aceptar y respetar las normas establecidas en la Universidad de destino <ACADEMIC_NETWORK_ACRONYM>.\n"+

      "Autorizo el tratamiento de mis datos personales con el objeto de alcanzar la finalidad, materia del concurso y que pueden ser transferidos a otras ??reas de la UNSA e Instituciones P??blicas (MINEDU, SUNEDU, etc.) de conformidad con las disposiciones contenidas en la Ley Nro. 29733, su Reglamento, Normas y Modificatorias."
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
