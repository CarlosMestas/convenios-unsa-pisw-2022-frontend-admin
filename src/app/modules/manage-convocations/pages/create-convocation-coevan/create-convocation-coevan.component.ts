import { CreateConvocationGeneralService } from '@app/core/services/convocation/create-convocation-general.service';
import { CreateConvocationCoevanService } from '@app/core/services/convocation/create-convocation-coevan.service';
import { ManageConvocationsRouterModule } from './../../manage-convocations.routes';
import { Router, ActivatedRoute } from '@angular/router';
import { postCreateConvocationCoevanRequestAction } from './../../../../ngrx/actions/convocation/create-convocation-coevan.actions';
import { IFormCreateConvocationGeneral } from './../../../../shared/interfaces/convocation.interface';
import { ILink } from './../../../../shared/interfaces/create-convocation-link.interface';
import { IDocument, IDocumentWOFile } from './../../../../shared/interfaces/create-convocation-document.interface';
import { IUniversityResponse } from './../../../../shared/interfaces/university.interface';
import { IAppState } from './../../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { Observable, map, Subscription } from 'rxjs';
import { IRequirementResponse } from './../../../../shared/interfaces/requirement.interface';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { requirementsGetAllRequestAction } from '@app/ngrx/actions/convocation/requirement.actions';
import { documentsFormCreateConvocationCoevanStateSelector, linksFormCreateConvocationCoevanStateSelector, requirementsFormCreateConvocationCoevanStateSelector } from '@app/ngrx/selectors/convocation/form-create-coevan.selector';
import { IAcademicNetworkResponse } from '@app/shared/interfaces/academic-network.interface';
import { AcademicNetworkService } from '@app/core/services/academic-network/academic-network.service';
import { UniversityService } from '@app/core/services/university/university.service';
import { formCreateConvocationGeneralStateSelector } from '@app/ngrx/selectors/convocation/create-general.selector';


@Component({
  selector: 'app-create-convocation-coevan',
  templateUrl: './create-convocation-coevan.component.html',
  styleUrls: ['./create-convocation-coevan.component.scss']
})
export class CreateConvocationCoevanComponent implements OnInit,OnDestroy {
  multiple:boolean = true
  displayCreateDocumentModal:boolean
  displayCreateLinkModal:boolean
  formCreateConvocationCoevan:FormGroup
  formCreateConvCoevanTextTemplate:FormGroup
  requirementsSelected:IRequirementResponse[]
  requirements$:Observable<IRequirementResponse[]>

  universitiesByAcademicNetwork$:Observable<IUniversityResponse[]>
  academicNetworks$:Observable<IAcademicNetworkResponse[]>


  documents:IDocument[]
  documentsSubscription$!:Subscription
  links:ILink[]
  linksSubscription$!:Subscription

  formCreateConvocationGeneral!:IFormCreateConvocationGeneral
  formCreateConvocationGeneralSubscription$!:Subscription
  // values1: any[] = [{key:'1', value:'one'}];
  // key: string='';
  // value: string='';
  // add() {
  //   this.values1 = [...this.values1, {key: this.key, value:this.value}]
  //   console.log(this.values1);
  // }
  constructor(
    private store:Store<IAppState>,
    private academicNetworkService:AcademicNetworkService,
    private universityService:UniversityService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private convocationCoevanService:CreateConvocationCoevanService
  ) {
    this.formCreateConvocationCoevan = new FormGroup({
      academicNetwork: new FormControl({},[Validators.required]),
      university: new FormControl({},[Validators.required]),
      requirements: new FormControl({},[Validators.required]),
      documents: new FormControl({},[Validators.required]),
      links: new FormControl({},[Validators.required]),
      frecCardiaca:new FormControl({},[Validators.required]),
      semester: new FormControl({},[Validators.required]),
    })
    this.formCreateConvCoevanTextTemplate = new FormGroup({
      avaltext: new FormControl(this.aval,[Validators.required]
        ),
      coursestext: new FormControl(
        this.courses,[Validators.required]
        ),
      commitment: new FormControl(
        this.commitment,[Validators.required]
      )
    })
    this.requirements$ = new Observable<IRequirementResponse[]>()
    this.universitiesByAcademicNetwork$ = new Observable<IUniversityResponse[]>()
    this.academicNetworks$ = new Observable<IAcademicNetworkResponse[]>()
    this.requirementsSelected=[]
    this.documents = []
    this.links = []
    this.displayCreateDocumentModal=false
    this.displayCreateLinkModal = false
  }

  ngOnInit(): void {
    this.store.dispatch(requirementsGetAllRequestAction())
    this.requirements$ = this.store.select(requirementsFormCreateConvocationCoevanStateSelector)

    this.documentsSubscription$=this.store.select(documentsFormCreateConvocationCoevanStateSelector).subscribe(documents=>{
      this.documents = documents
    })
    this.linksSubscription$=this.store.select(linksFormCreateConvocationCoevanStateSelector).subscribe(links=>{
      this.links=links
    })
    this.formCreateConvocationGeneralSubscription$=this.store.select(formCreateConvocationGeneralStateSelector).subscribe(form=>{
      this.formCreateConvocationGeneral=form
    })

    this.universitiesByAcademicNetwork$=this.universityService.getUniversityByAcademicNetwork(1)
    .pipe(
        map(resp=>{
          return resp.data
        }
      )
    )

    this.academicNetworks$=this.academicNetworkService.getAllAcademicNetwork()
    .pipe(
        map(resp=>{
          return resp.data
        }
      )
    )

  }

  ngOnDestroy(): void {
    this.documentsSubscription$.unsubscribe()
    this.linksSubscription$.unsubscribe()
    this.formCreateConvocationGeneralSubscription$.unsubscribe()
  }
  createConvocationDetailCoevan(){



    let newCoevanConvocation = new FormData()
    newCoevanConvocation.append("id_academic_network",(this.formCreateConvocationCoevan.value["academicNetwork"]))
    newCoevanConvocation.append("id_university",(this.formCreateConvocationCoevan.value["university"]))

    let requirements:number[] = (this.formCreateConvocationCoevan.value["requirements"]) as number[]
    let documents:IDocument[] = (this.formCreateConvocationCoevan.value["documents"]) as IDocument[]
    let links: ILink[] = (this.formCreateConvocationCoevan.value["links"]) as ILink[]
    let documentsObject:IDocumentWOFile[] =[]

    requirements.forEach((value, index,array)=>{
      newCoevanConvocation.append("requirements[]",JSON.stringify(value
      ))
    })


    links.forEach((value, index,array)=>{
      newCoevanConvocation.append("links[]",JSON.stringify({
        name:value.name,
        type:value.type,
        url:value.url,
        description:value.description
      }))
    })

    documents.forEach((value,index,array)=>{
        newCoevanConvocation.append("documents[]",JSON.stringify({
          name:value.name,
          type:value.type,
          description:value.description
        }))
    })

    documents.forEach((value,index,array)=>{
      newCoevanConvocation.append("files[]",value.document,value.document.name)
    })



      newCoevanConvocation.append("semester",(this.formCreateConvocationCoevan.value["semester"]))

      newCoevanConvocation.append(
        "avaltext",
        this.formCreateConvCoevanTextTemplate.value["avaltext"].toString())
      newCoevanConvocation.append(
        "coursestext",
        this.formCreateConvCoevanTextTemplate.value["coursestext"].toString())
      newCoevanConvocation.append(
        "commitment",
        this.formCreateConvCoevanTextTemplate.value["commitment"].toString())



    this.store.dispatch(postCreateConvocationCoevanRequestAction({data:{
      general:this.formCreateConvocationGeneral,
      coevan:newCoevanConvocation
    }}))


    // this.router.navigate(["../"+ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_LIST_CONVOCATION],{relativeTo: this.activatedRoute})

  }

  filterRequirement(requirements:IRequirementResponse[]):number[]{
    let values:number[]=[]
    requirements.forEach(element => {
      values.push(element.id)
    });
    return values
  }

  changeAcademicNetwork(event:any){
    console.log(event.value)
    this.universitiesByAcademicNetwork$=this.universityService.getUniversityByAcademicNetwork(event.value)
    .pipe(
        map(resp=>{
          return resp.data
        }
      )
    )
  }

  aval:string = "La autoridad abajo firmante avala la postulación del estudiante Agustino: <STUDENT_LASTNAME>, <STUDENT_NAME>, para que efectúe el semestre académico <SEMESTER>, a través del programa de intercambio estudiantil <ACADEMIC_NETWORK_ACRONYM> en la <UNIVERSITY_TARGET>, a desarrollarse durante el semestre académico <SEMESTER>, tras considerar que la Movilidad Académica a efectuar será "+
  " de gran utilidad para su desarrollo profesional, y un significativo aporte para su perfil de egresado."
  courses:string = "Como responsable académico de la facultad <FACULTY>/<PROFESSIONAL_PROGRAM> de la UNSA, doy mi conformidad de los cursos a llevarse de manera <MODALITY> para efectos de reconocimiento o capacitación, siempre y cuando el estudiante los apruebe en la <UNIVERSITY_TARGET>, donde efectuará movilidad académica <MODALITY> en el Marco de la <ACADEMIC_NETWORK_NAME> – <ACADEMIC_NETWORK_ACRONYM>"

  commitment:string = "Acepto las condiciones del <ACADEMIC_NETWORK_NAME> <ACADEMIC_NETWORK_ACRONYM> <SEMESTER>, y me comprometo a cumplir las siguientes cláusulas, en caso de ser seleccionado: \n"+

  "Comunicar en forma expresa (email), la aceptación de la beca a la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM> dentro del plazo que se indique en cada convocatoria. \n"+

  "Realizar las actividades académicas que, en el marco del plan de estudios, recomiende el Coordinador de la carrera correspondiente, y aceptar todas las actuaciones de seguimiento, control, y evaluación establecidas por la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM>. \n"+

  "Presentarme con el Coordinador del Programa de Intercambio <MODALITY> de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM> y presentar toda la documentación requerida para mi inscripción como alumno de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM>.\n"+

  "En caso de un cambio en el contrato académico original, enviar por correo electrónico al coordinador UNSA, los datos de las nuevas materias a cursar en la universidad de destino (actualizado y avalado), para que se considere su reconocimiento o convalidación. Se establece para este trámite un plazo no mayor de 30 días transcurridos después del inicio de clases en la universidad de destino. Luego de ello, cualquier trámite de retiro de curso, cambio de curso u otra modificación para la regularización académica, será considerado por la OUCCRIBP el trámite como extemporáneo, debiendo asumir el estudiante las consecuencias académicas del caso.\n" +

  "Completado el Intercambio Académico <MODALITY>, el estudiante deberá presentar un informe escrito a la UNSA, dentro de los 30 días de culminado el programa, con copia a la Escuela Profesional. \n"+

  "Aceptar y respetar las normas establecidas en la Universidad de destino <ACADEMIC_NETWORK_ACRONYM>.\n"+

  "Autorizo el tratamiento de mis datos personales con el objeto de alcanzar la finalidad, materia del concurso y que pueden ser transferidos a otras áreas de la UNSA e Instituciones Públicas (MINEDU, SUNEDU, etc.) de conformidad con las disposiciones contenidas en la Ley Nro. 29733, su Reglamento, Normas y Modificatorias."

}
