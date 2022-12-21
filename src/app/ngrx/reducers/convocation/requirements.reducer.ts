import { requirementsGetAllRequestAction, requirementsGetAllSuccessAction, requirementsGetAllErrorAction, requirementPostRequestAction, requirementPostSuccessAction, requirementPostErrorAction, requirementGetByConvocationIdRequestAction, requirementGetByConvocationIdSuccessAction, requirementGetByConvocationIdErrorAction } from '@app/ngrx/actions/convocation/requirement.actions';
import { RequirementInitialState } from '@app/ngrx/initial-states/requirement.initial-state';
import { createReducer, on } from '@ngrx/store';
export const RequirementsReducer = createReducer(
  RequirementInitialState,
  on(requirementsGetAllRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(requirementsGetAllSuccessAction,(state,params)=>{
    return {...state, requirements:params.requirements}
  }),
  on(requirementsGetAllErrorAction,(state)=>{
    return {...state,working:false}
  }),
  on(requirementPostRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(requirementPostSuccessAction,(state)=>{
    return {...state, working:false}
  }),
  on(requirementPostErrorAction,(state)=>{
    return {...state, working:false}
  })
)
