import { createConvocationDocumentSetStateAction } from '@app/ngrx/actions/convocation/create-convocation-document.actions';
import { createConvocationLinkSetStateAction } from '@app/ngrx/actions/convocation/create-convocation-link.actions';
import { requirementGetByConvocationIdErrorAction, requirementGetByConvocationIdRequestAction, requirementGetByConvocationIdSuccessAction, requirementPostErrorAction, requirementPostRequestAction, requirementPostSuccessAction, requirementsGetAllErrorAction, requirementsGetAllRequestAction, requirementsGetAllSuccessAction } from '@app/ngrx/actions/convocation/requirement.actions';
import { FormCreateConvocationCoevanInitialState } from '@app/ngrx/initial-states/convocation.initial-state';
import { createReducer, on } from '@ngrx/store';
export const formCreateConvocationCoevanReducer = createReducer(
  FormCreateConvocationCoevanInitialState,
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
  }),
  on(requirementGetByConvocationIdRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(requirementGetByConvocationIdSuccessAction,(state,params)=>{
    return {...state,working:false, requirements:params.requirements}
  }),
  on(requirementGetByConvocationIdErrorAction,(state)=>{
    return{...state,working:false}
  }),
  on(createConvocationDocumentSetStateAction,(state,params)=>{
    return{...state,documents:[...state.documents, params.data]}
  }),
  on(createConvocationLinkSetStateAction,(state,params)=>{
    return{...state,links:[...state.links, params.data]}
  }),
)
