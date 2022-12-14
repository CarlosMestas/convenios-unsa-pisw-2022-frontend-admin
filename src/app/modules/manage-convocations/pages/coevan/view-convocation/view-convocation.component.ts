import { ActivatedRoute } from '@angular/router';
import { Observable, pipe, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPostulationCoevanResponse } from '@app/shared/interfaces/postulation.interface';
import { PostulationService } from '@app/core/services/postulation/postulation.service';

@Component({
  selector: 'app-view-convocation',
  templateUrl: './view-convocation.component.html',
  styleUrls: ['./view-convocation.component.scss']
})
export class ViewConvocationComponent implements OnInit {
  id:number
  loading:boolean = false
  postulations$:Observable<IPostulationCoevanResponse[]>
  constructor(
    private postulation:PostulationService,
    route:ActivatedRoute,
  ) {
    this.id = route.snapshot.params['id']
    this.postulations$ = new Observable<IPostulationCoevanResponse[]>()
  }

  ngOnInit(): void {
    this.postulations$ = this.postulation.getPostulationsByConvocation(this.id)
    .pipe(map(data=> data.data))
  }
  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }
}
