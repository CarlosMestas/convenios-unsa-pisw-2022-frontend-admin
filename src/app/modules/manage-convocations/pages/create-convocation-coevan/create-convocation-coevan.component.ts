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

    console.log(this.formCreateConvocationCoevan.value["academicNetwork"].toString())
    console.log(this.formCreateConvocationCoevan.value["university"].toString())

    let newCoevanConvocation = new FormData()
    newCoevanConvocation.append("id_convocation","1")
    newCoevanConvocation.append("id_academic_network",(this.formCreateConvocationCoevan.value["academicNetwork"]).toString())
    newCoevanConvocation.append("id_university",(this.formCreateConvocationCoevan.value["university"]).toString())
    //newCoevanConvocation.append("links",JSON.stringify(this.formCreateConvocationCoevan.value["links"]))
    //newCoevanConvocation.append("requirements",JSON.stringify(this.filterRequirement(this.formCreateConvocationCoevan.value["requirements"] as IRequirementResponse[])))




    let documents:IDocument[] = (this.formCreateConvocationCoevan.value["documents"]) as IDocument[]
    let documentsObject:IDocumentWOFile[] =[]
    documents.forEach((value,index,array)=>{
      // documentsObject.push(
      //   {
      //     name:value.name,
      //     type:value.type,
      //     description:value.description
      //   }
        newCoevanConvocation.append("documents",JSON.stringify({
          name:value.name,
          type:value.type,
          description:value.description
        }))

      // newCoevanConvocation.append("files[]", value.document)

    })
      // newCoevanConvocation.append("documents",JSON.stringify(documentsObject))

    this.convocationCoevanService.postCreateConvocationCoevan(newCoevanConvocation).subscribe(resp=>{
      console.log(resp)
    }
    )


    // this.store.dispatch(postCreateConvocationCoevanRequestAction({data:{
    //   general:this.formCreateConvocationGeneral,
    //   coevan:newCoevanConvocation
    // }}))



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

}
