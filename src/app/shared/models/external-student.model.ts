import {IExternalStudent} from "@shared/interfaces/external-student.interface";

export class ExternalStudent implements IExternalStudent{
  id:number;
  name:string;
  lastname:string;
  email:string;
  justification:string;
  status_request:number;
  email_created:string
  constructor(
    id: number,
    name: string,
    lastname: string,
    email: string,
    justification: string,
    status_request: number,
    email_created: string
  ){
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.justification = justification
    this.status_request = status_request
    this.email_created = email_created
  }
}
