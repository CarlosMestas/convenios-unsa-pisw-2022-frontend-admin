import { ConvocationGeneralService } from '@app/core/services/convocation/convocation-general.service';
import { ConvocationCoevanService } from '@app/core/services/convocation/convocation-coevan.service';
import { ManageConvocationsRouterModule } from '../../../manage-convocations.routes';
import { Router, ActivatedRoute } from '@angular/router';
import { postCreateConvocationCoevanRequestAction } from '../../../../../ngrx/actions/convocation/create-convocation-coevan.actions';
import { IFormCreateConvocationGeneral } from '../../../../../shared/interfaces/convocation.interface';
import { ILink } from '../../../../../shared/interfaces/create-convocation-link.interface';
import { IDocument, IDocumentWOFile } from '../../../../../shared/interfaces/create-convocation-document.interface';
import { IUniversityResponse } from '../../../../../shared/interfaces/university.interface';
import { IAppState } from '../../../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { Observable, map, Subscription } from 'rxjs';
import { IRequirementResponse } from '../../../../../shared/interfaces/requirement.interface';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { requirementsGetAllRequestAction } from '@app/ngrx/actions/convocation/requirement.actions';
import { documentsFormCreateConvocationCoevanStateSelector, linksFormCreateConvocationCoevanStateSelector } from '@app/ngrx/selectors/convocation/form-create-coevan.selector';
import { IAcademicNetworkResponse } from '@app/shared/interfaces/academic-network.interface';
import { AcademicNetworkService } from '@app/core/services/academic-network/academic-network.service';
import { UniversityService } from '@app/core/services/university/university.service';
import { formCreateConvocationGeneralStateSelector } from '@app/ngrx/selectors/convocation/convocation-general.selector';
import { requirementsSelector } from '@app/ngrx/selectors/convocation/requirements.selector';


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
    private convocationCoevanService:ConvocationCoevanService
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
    this.requirements$ = this.store.select(requirementsSelector)

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

    //------------- lo siguiente es un work arround para enviar el tipo IDocument a trav??s de un FormData
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
    // ----------------------------------------------------------------------------------------


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


    this.router.navigate(["../"+ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_LIST_CONVOCATION],{relativeTo: this.activatedRoute})

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

  textInsert(text:HTMLTextAreaElement, event:string){
    let idx = text.selectionEnd
    let textValue = text.value
    let result = textValue.slice(0, idx) + event + textValue.slice(idx + Math.abs(0));
    text.value = result
    text.selectionEnd = idx + event.length
  }


  aval:string = "La autoridad abajo firmante avala la postulaci??n del estudiante Agustino: <STUDENT_LASTNAME>, <STUDENT_NAME>, para que efect??e el semestre acad??mico <SEMESTER>, a trav??s del programa de intercambio estudiantil <ACADEMIC_NETWORK_ACRONYM> en la <UNIVERSITY_TARGET>, a desarrollarse durante el semestre acad??mico <SEMESTER>, tras considerar que la Movilidad Acad??mica a efectuar ser?? "+
  " de gran utilidad para su desarrollo profesional, y un significativo aporte para su perfil de egresado."
  courses:string = "Como responsable acad??mico de la facultad <FACULTY>/<PROFESSIONAL_PROGRAM> de la UNSA, doy mi conformidad de los cursos a llevarse de manera <MODALITY> para efectos de reconocimiento o capacitaci??n, siempre y cuando el estudiante los apruebe en la <UNIVERSITY_TARGET>, donde efectuar?? movilidad acad??mica <MODALITY> en el Marco de la <ACADEMIC_NETWORK_NAME> ??? <ACADEMIC_NETWORK_ACRONYM>"

  commitment:string = "Acepto las condiciones del <ACADEMIC_NETWORK_NAME> <ACADEMIC_NETWORK_ACRONYM> <SEMESTER>, y me comprometo a cumplir las siguientes cl??usulas, en caso de ser seleccionado: \n"+

  "Comunicar en forma expresa (email), la aceptaci??n de la beca a la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM> dentro del plazo que se indique en cada convocatoria. \n"+

  "Realizar las actividades acad??micas que, en el marco del plan de estudios, recomiende el Coordinador de la carrera correspondiente, y aceptar todas las actuaciones de seguimiento, control, y evaluaci??n establecidas por la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM>. \n"+

  "Presentarme con el Coordinador del Programa de Intercambio <MODALITY> de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM> y presentar toda la documentaci??n requerida para mi inscripci??n como alumno de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM>.\n"+

  "En caso de un cambio en el contrato acad??mico original, enviar por correo electr??nico al coordinador UNSA, los datos de las nuevas materias a cursar en la universidad de destino (actualizado y avalado), para que se considere su reconocimiento o convalidaci??n. Se establece para este tr??mite un plazo no mayor de 30 d??as transcurridos despu??s del inicio de clases en la universidad de destino. Luego de ello, cualquier tr??mite de retiro de curso, cambio de curso u otra modificaci??n para la regularizaci??n acad??mica, ser?? considerado por la OUCCRIBP el tr??mite como extempor??neo, debiendo asumir el estudiante las consecuencias acad??micas del caso.\n" +

  "Completado el Intercambio Acad??mico <MODALITY>, el estudiante deber?? presentar un informe escrito a la UNSA, dentro de los 30 d??as de culminado el programa, con copia a la Escuela Profesional. \n"+

  "Aceptar y respetar las normas establecidas en la Universidad de destino <ACADEMIC_NETWORK_ACRONYM>.\n"+

  "Autorizo el tratamiento de mis datos personales con el objeto de alcanzar la finalidad, materia del concurso y que pueden ser transferidos a otras ??reas de la UNSA e Instituciones P??blicas (MINEDU, SUNEDU, etc.) de conformidad con las disposiciones contenidas en la Ley Nro. 29733, su Reglamento, Normas y Modificatorias."

}
