import { createConvocationSetStateAction } from './../../../../ngrx/actions/convocation/create-convocation-general.actions';
import { IAppState } from '@app/ngrx/app.state';
import { Store } from '@ngrx/store';
import { ManageConvocationsRouterModule } from './../../manage-convocations.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { ETypeConvocations, IFormCreateConvocationGeneral } from './../../../../shared/interfaces/convocation.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IModalityConvocationResponse, ITypeConvocationResponse } from '@app/shared/interfaces/convocation.interface';
import { ModalityConvocationService } from '@app/core/services/convocation/modality-convocation.service';
import { TypeConvocationService } from '@app/core/services/convocation/type-convocation.service';

@Component({
  selector: 'app-create-convocation',
  templateUrl: './create-convocation.component.html',
  styleUrls: ['./create-convocation.component.scss']
})
export class CreateConvocationComponent implements OnInit {


  formCreateConvocation:FormGroup

  convocationTypeFiltered!:ITypeConvocationResponse[]

  convocationTypes$:Observable<ITypeConvocationResponse[]>
  convocationModalities$:Observable<IModalityConvocationResponse[]>
  aficheFile!:File
  constructor(
    private typeConvocationService:TypeConvocationService,
    private modalityConvocationService:ModalityConvocationService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private store:Store<IAppState>
  ) {
    this.convocationTypes$ = new Observable<ITypeConvocationResponse[]>()
    this.convocationModalities$ = new Observable<IModalityConvocationResponse[]>()
    this.formCreateConvocation = new FormGroup({
      nameConvocation:new FormControl('',[Validators.required]),
      typeConvocation:new FormControl('',[Validators.required]),
      correlative:new FormControl(''),
      modalityConvocation:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      startDate:new FormControl('',[Validators.required]),
      endDate:new FormControl('',[Validators.required]),
      importantNotes:new FormControl('',[Validators.required])
    }
    )
  }

  ngOnInit(): void {
    this.convocationTypes$=this.typeConvocationService.getAllTypeConvocations()
    .pipe(
        map(resp=>{
          return resp.data
        }
      )
    )

    this.convocationModalities$=this.modalityConvocationService.getAllModalityConvocations()
    .pipe(
        map(resp=>{
          return resp.data
        }
      )
    )

  }
  fileLoaded(event:any){
    this.aficheFile = event.files[0]
  }
  createConvocationGeneralData(){
    let dateini:Date = this.formCreateConvocation.value["startDate"]
    let dateend:Date = this.formCreateConvocation.value["endDate"]
    let createConvocation:IFormCreateConvocationGeneral = {
      title: this.formCreateConvocation.value["nameConvocation"],
      type: (this.formCreateConvocation.value["typeConvocation"] as ITypeConvocationResponse).id,
      correlative: this.formCreateConvocation.value["correlative"],
      modality: (this.formCreateConvocation.value["modalityConvocation"] as IModalityConvocationResponse).id,
      description: this.formCreateConvocation.value["description"],
      start_date: dateini.getFullYear()+"-"+(dateini.getMonth()+1)+"-"+dateini.getDate(),
      end_date: dateend.getFullYear()+"-"+(dateend.getMonth()+1)+"-"+dateend.getDate(),
      important_notes: this.formCreateConvocation.value["importantNotes"],
      afiche: this.aficheFile
    }
    this.store.dispatch(createConvocationSetStateAction({data:createConvocation}))

    switch ((this.formCreateConvocation.value["typeConvocation"] as ITypeConvocationResponse).acronym) {
      case ETypeConvocations.COEVAN:
        this.router.navigate(["../"+ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION_COEVAN],{relativeTo: this.activatedRoute})
        break;
      default:
        break;
    }
  }
}
