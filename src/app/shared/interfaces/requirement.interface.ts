export interface IRequirementResponse{
  id:number,
  description:string
}

export interface IRequirement{
  description:string
}

export interface IRequirementState{
  requirements:IRequirementResponse[],
  working:boolean
}
