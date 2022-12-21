import { ResourcesService } from './../../../../../../core/services/postulation/resources.service';
import { IDocumentResponseDetail } from './../../../../../../shared/interfaces/create-convocation-document.interface';
import { IPostulationCoevanResponseDetail } from './../../../../../../shared/interfaces/postulation.interface';
import { ENUMPostulationCoevanStatus } from './../../../../../../shared/interfaces/enum/convocation.enum';
import { IConvocationResponseDetail } from './../../../../../../shared/interfaces/convocation.interface';
import { Subscription } from 'rxjs';
import { ConvocationGeneralService } from './../../../../../../core/services/convocation/convocation-general.service';
import { PostulationService } from './../../../../../../core/services/postulation/postulation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, OnDestroy {
  id:number
  private unsubscribe: Subscription[] = [];
  postulation:IPostulationCoevanResponseDetail
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postulationService:PostulationService,
    private convocationService:ConvocationGeneralService,
    private resourcesService:ResourcesService
  ) {
    this.id = activatedRoute.parent?.parent?.parent?.snapshot.params['id'];
    this.postulation = {} as IPostulationCoevanResponseDetail
  }

  ngOnInit(): void {
    console.log("postulation id:",this.id)
    if(this.id!=null && this.id!=undefined){
      const convocationSub = this.postulationService.getPostulationById(this.id).subscribe(data=>{
        this.postulation = data.data

        convocationSub.unsubscribe()
      })
      this.unsubscribe.push(convocationSub);
    }else{
      this.router.navigate([""])
      return
    }
  }

  downloadDocument(url:string){
    this.resourcesService.downloadDocument(url).subscribe(data=>{
      let a  = document.createElement('a')
      a.download = "documento"
      a.href = window.URL.createObjectURL(data.data)
      a.click()
    })
  }


  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

}
