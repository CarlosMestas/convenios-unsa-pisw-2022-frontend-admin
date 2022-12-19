import { PostulationService } from '@app/core/services/postulation/postulation.service';
import { PostulationRoutingModule } from './../postulation.routes';
import { ENUMConvocationTypeAcronym } from './../../../shared/interfaces/enum/convocation.enum';
import { Subscription, mergeMap, catchError, EMPTY } from 'rxjs';
import { ConvocationGeneralService } from '@app/core/services/convocation/convocation-general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {

  id: number;
  private unsubscribe: Subscription[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private convocationService:ConvocationGeneralService,
    private postulationService:PostulationService
  ) {
    this.id = activatedRoute.parent?.snapshot.params['id'];
  }

  ngOnInit(): void {
    const convocationSub = this.postulationService.getPostulationById(this.id).pipe(
      mergeMap(data=>{
        return this.convocationService.getConvocation(data.data.id_convocation)
      }),
      catchError(() => EMPTY)).subscribe(data=>{
        switch(data.data.type.acronym){

          case ENUMConvocationTypeAcronym.COEVAN:{
            this.router.navigate(["./"+PostulationRoutingModule.ROUTES_VALUES.ROUTE_POSTULACION_COEVAN],{relativeTo:this.activatedRoute})
            console.log("route COEVAN")
            break
          }
          case ENUMConvocationTypeAcronym.COEVIENEN:{
            break
          }
          case ENUMConvocationTypeAcronym.CODVAN:{
            break
          }
          case ENUMConvocationTypeAcronym.CODVIENEN:{
            break
          }
          case ENUMConvocationTypeAcronym.PIVE:{
            break
          }
          case ENUMConvocationTypeAcronym.PIVDO:{
            break
          }
          default :{
            break
          }
        }
        convocationSub.unsubscribe()
      })
      this.unsubscribe.push(convocationSub)
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb=>sb.unsubscribe())
  }

}
