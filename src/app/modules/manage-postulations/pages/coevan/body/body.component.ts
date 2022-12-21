import { PostulationCoevanRoutingModule } from './../postulation-coevan.routes';
import { ENUMPostulationCoevanStatus } from '@app/shared/interfaces/enum/convocation.enum';
import { PostulationService } from '@app/core/services/postulation/postulation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IConvocationResponseDetail } from './../../../../../shared/interfaces/convocation.interface';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ConvocationGeneralService } from '@app/core/services/convocation/convocation-general.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  id:number
  items: MenuItem[] = [];
  private unsubscribe: Subscription[] = [];
  convocation:IConvocationResponseDetail
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postulationService:PostulationService,
    private convocationService:ConvocationGeneralService
  ) {
    this.id = activatedRoute.parent?.parent?.snapshot.params['id'];
    this.convocation = {} as IConvocationResponseDetail
    this.items = [
      {
        label: 'Postulación',
        routerLink: 'postulacion',
      },
      {
        label: 'Inicialización',
        routerLink: 'seat',
      },
      {
        label: 'Seguimiento',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ];
  }


  ngOnInit(): void {
    const subs1 = this.convocationService.getConvocation(this.id).subscribe(data=>{
      this.convocation = data.data
      subs1.unsubscribe()
    })
    this.unsubscribe.push(subs1)

    console.log("postulation id:",this.id)
    if(this.id!=null && this.id!=undefined){
      const convocationSub = this.postulationService.getPostulationById(this.id).subscribe(data=>{
        console.log("is there any error?", data)
        if(!data.error){
          switch(data.data.post_state.id){
            case ENUMPostulationCoevanStatus.SIN_ENVIAR:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_COEVAN_APPLICATION],{relativeTo:this.activatedRoute})
              break
            }
            case ENUMPostulationCoevanStatus.ACEPTADO:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_COEVAN_APPLICATION],{relativeTo:this.activatedRoute})
              break
            }
            case ENUMPostulationCoevanStatus.OBSERVADO:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_COEVAN_APPLICATION],{relativeTo:this.activatedRoute})
              break
            }
            default :{
              break
            }
          }
        }else{
          console.log("Error no postulation")
          this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_COEVAN_APPLICATION],{relativeTo:this.activatedRoute})
        }
        convocationSub.unsubscribe()
      })
      this.unsubscribe.push(convocationSub);
    }else{

      this.router.navigate([""])
      return
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

}
