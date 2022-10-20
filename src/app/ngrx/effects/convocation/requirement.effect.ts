import { RequirementService } from './../../../core/services/requirement/requirement.service';
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, EMPTY, map, mergeMap, of } from "rxjs"
import { RequirementActions, requirementPostRequestAction, requirementsGetAllRequestAction } from "../../actions/convocation/requirement.actions"

@Injectable()
export class RequirementEffect{
  constructor(
    private actions$:Actions,
    private requirementService: RequirementService
  ){

  }


  requirementsGetAllRequestEffect = createEffect(()=>this.actions$.pipe(
    ofType(requirementsGetAllRequestAction),
    mergeMap(()=>this.requirementService.getAllRequirements()
    .pipe(
      map(resp=>{
        return {
          type:RequirementActions.REQUIREMENTS_GET_ALL_SUCCESS_ACTION,
          requirements:resp.data
        }
      }),
      catchError(()=>EMPTY)
    ))
  ))

  requirementPostRequestEffect = createEffect(()=>this.actions$.pipe(
    ofType(requirementPostRequestAction),
    mergeMap((action)=> this.requirementService.postRequirement(action.value)
    .pipe(
      map(resp =>{
        return {
          type:RequirementActions.REQUIREMENTS_GET_ALL_REQUEST_ACTION
        }
      }
      )
    )
    )
  ))
}
