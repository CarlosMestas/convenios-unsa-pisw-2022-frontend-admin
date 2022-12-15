import { universitiesSelector } from './../../../../ngrx/selectors/convocation/universities.selector';
import { AcademicNetworkService } from '@app/core/services/academic-network/academic-network.service';
import { universityGetByNetworkIdRequestAction } from './../../../../ngrx/actions/convocation/university.actions';
import { Store } from '@ngrx/store';
import { IAppState } from './../../../../ngrx/app.state';
import { UniversityService } from './../../../../core/services/university/university.service';
import { IUniversityResponse } from './../../../../shared/interfaces/university.interface';
import { Observable, map, Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list-universities',
  templateUrl: './list-universities.component.html',
  styleUrls: ['./list-universities.component.scss']
})
export class ListUniversitiesComponent implements OnInit,OnDestroy {
  @Input() academicNetworkId!:number
  displayModal:boolean
  universitiesByNetwork$:Observable<IUniversityResponse[]>
  universities:IUniversityResponse[]
  universitiesSelected:number[]

  private unsubscribe: Subscription[] = [];
  constructor(
    private store:Store<IAppState>,
    private universityService:UniversityService,
    private academicNetworkService:AcademicNetworkService
  ) {
    this.displayModal = false
    this.universitiesByNetwork$ = new Observable<IUniversityResponse[]>()
    this.universities = []
    this.universitiesSelected = []
  }

  ngOnInit(): void {
    const subs1 = this.universityService.getAllUniversity().subscribe(data=>{
      this.universities = data.data
      subs1.unsubscribe()
    })
    this.universitiesByNetwork$ = this.store.select(universitiesSelector)
    this.unsubscribe.push(subs1)
  }

  save(){
    let formData = new FormData()
    formData.append("id_university",this.universitiesSelected[0].toString())
    formData.append("id_academic_network",this.academicNetworkId.toString())

    console.log("universities selected: ",this.universitiesSelected)
    const subs2 = this.academicNetworkService.asignAcademicNetwork(formData).subscribe(data=>{
      console.log("trying to save")
      this.store.dispatch(universityGetByNetworkIdRequestAction({ networkId:this.academicNetworkId}))
      subs2.unsubscribe()
    })
    this.unsubscribe.push(subs2)
    this.universitiesSelected = []
  }


  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  viewModal(){
    this.displayModal = true
    this.store.dispatch(universityGetByNetworkIdRequestAction({ networkId:this.academicNetworkId}))
  }

}
