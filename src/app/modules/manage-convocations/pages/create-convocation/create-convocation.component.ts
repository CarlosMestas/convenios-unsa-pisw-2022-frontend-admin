import { Component, OnInit } from '@angular/core';
import { ITypeConvocation } from '@app/shared/interfaces/convocation.interface';

@Component({
  selector: 'app-create-convocation',
  templateUrl: './create-convocation.component.html',
  styleUrls: ['./create-convocation.component.scss']
})
export class CreateConvocationComponent implements OnInit {
  name!:string
  date!:string
  notaImportante!:string
  correlative!:string
  convocationTypesString:string[]=[
    "COEVAN",
    "COEVIENEN",
    "CODVAN",
    "CODVIENEN",
    "PIVE",
    "PIVDO"
  ]
  convocationTypeFiltered!:ITypeConvocation[]
  convocationTypes:ITypeConvocation[] = [
    {
      id:1,
      name:"Ordinaria Estudiantes Van",
      acronym:"COEVAN"
    },
    {
      id:2,
      name:"Ordinaria Estudiantes Vienen",
      acronym:"COEVIENEN"
    },
    {
      id:3,
      name:"Ordinaria Docentes Van",
      acronym:"CODVAN"
    },
    {
      id:4,
      name:"Ordinaria Docentes Vienen",
      acronym:"CODVIENEN"
    },
    {
      id:5,
      name:"Extraordinaria Estudiantes",
      acronym:"PIVE"
    },
    {
      id:6,
      name:"Extraordinaria Docentes",
      acronym:"PIVDO"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
