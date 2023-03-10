import { ManageRoutingModule } from '@app/modules/manage/manage.routes';
import { AppRoutingModule } from './../../../../main/app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPostulationCoevanResponseDetail } from '@app/shared/interfaces/postulation.interface';
import { PostulationService } from '@app/core/services/postulation/postulation.service';

@Component({
  selector: 'app-view-convocation',
  templateUrl: './view-convocation.component.html',
  styleUrls: ['./view-convocation.component.scss']
})
export class ViewConvocationComponent implements OnInit {
  id:number
  loading:boolean = false
  postulations$:Observable<IPostulationCoevanResponseDetail[]>
  constructor(
    private postulation:PostulationService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
    this.id = activatedRoute.snapshot.params['id']
    this.postulations$ = new Observable<IPostulationCoevanResponseDetail[]>()
  }

  ngOnInit(): void {
    this.postulations$ = this.postulation.getPostulationsByConvocation(this.id)
    .pipe(map(data=> data.data))
  }
  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }

  viewPostulation(id:number){
    this.router.navigate(["./"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_ADMIN+"/"+ManageRoutingModule.ROUTES_VALUES.ROUTE_POSTULATIONS,id])
  }
}
