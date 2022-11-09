import {IRole} from "@shared/interfaces/role.interface";

export class Role implements IRole{
  id:number;
  name:string
  constructor(
    id: number,
    name: string,
  ){
  this.id = id
  this.name = name
  }
}
