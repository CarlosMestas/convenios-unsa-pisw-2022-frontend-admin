import {Admin} from "@shared/models/admin.model";
import {IAdminViewState} from "@shared/interfaces/admin.interface";

export const ViewAdminInitialState:IAdminViewState = {
  working: false,
  stateModal: false,
  adminData: new Admin(0,'','','','','',0),
  idAdmin: 0,
  error: null
}
