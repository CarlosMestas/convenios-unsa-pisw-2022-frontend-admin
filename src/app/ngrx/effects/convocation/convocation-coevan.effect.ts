import { RequirementService } from './../../../core/services/requirement/requirement.service';
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, EMPTY, map, mergeMap, of } from "rxjs"
import { RequirementActions, requirementPostRequestAction, requirementsGetAllRequestAction } from "../../actions/convocation/requirement.actions"
import { CreateConvocationGeneralService } from '@app/core/services/convocation/create-convocation-general.service';
import { CreateConvocationCoevanActions, postCreateConvocationCoevanRequestAction } from '@app/ngrx/actions/convocation/create-convocation-coevan.actions';
import { CreateConvocationCoevanService } from '@app/core/services/convocation/create-convocation-coevan.service';

@Injectable()
export class ConvocationCoevanEffect{
  constructor(
    private actions$:Actions,
    private createConvocationGeneralService: CreateConvocationGeneralService,
    private createConvocationCoevanService:CreateConvocationCoevanService
  ){

  }


  createConvocationCoevanRequest = createEffect(()=>this.actions$.pipe(
    ofType(postCreateConvocationCoevanRequestAction),
    mergeMap((action)=>{
      let formData:FormData = new FormData()
      formData.append("title",action.data.general.title)
      formData.append("type",action.data.general.type.toString())
      formData.append("correlative",action.data.general.correlative)
      formData.append("modality",action.data.general.modality.toString())
      formData.append("description",action.data.general.description)
      formData.append("start_date",action.data.general.start_date)
      formData.append("end_date",action.data.general.end_date)
      formData.append("important_notes",action.data.general.important_notes)
      formData.append("afiche",action.data.general.afiche,action.data.general.afiche.name)
      return this.createConvocationGeneralService.postCreateConvocationGeneral(formData)
      .pipe(
        mergeMap(resp=>{

            let formCoevan =  action.data.coevan
            formCoevan.append("id_convocation",resp.data.id.toString())
            // formCoevan.append("id_convocation","1")
            return this.createConvocationCoevanService.postCreateConvocationCoevan(formCoevan)
            .pipe(
              map(resp=>({
                type:CreateConvocationCoevanActions.POST_CREATE_CONVOCATION_COEVAN_SUCCESS_ACTION,
                data:resp.data
              }))
            )
          }
        ),
        catchError(()=>EMPTY)
      )
    }
    )
  ))

}
