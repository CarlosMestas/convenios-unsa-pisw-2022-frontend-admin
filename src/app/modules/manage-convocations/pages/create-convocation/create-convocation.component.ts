import { ManageConvocationsRouterModule } from './../../manage-convocations.routes';
import { Router } from '@angular/router';
import { ETypeConvocations } from './../../../../shared/interfaces/convocation.interface';
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

  constructor(
    private typeConvocationService:TypeConvocationService,
    private modalityConvocationService:ModalityConvocationService,
    private router:Router
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

  createConvocationGeneralData(){
    console.log((this.formCreateConvocation.value["typeConvocation"] as ITypeConvocationResponse).acronym)

    switch ((this.formCreateConvocation.value["typeConvocation"] as ITypeConvocationResponse).acronym) {
      case ETypeConvocations.COEVAN:
        this.router.navigate([ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION_COEVAN])
        break;
      default:
        break;
    }
  }
}
