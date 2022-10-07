import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ISidenavToggle{
  screenWidth:number;
  collapsed:boolean;
}

export interface ISidenavItem{
  url:string,
  icon:IconDefinition,
  label:string,
  visible:boolean
}
