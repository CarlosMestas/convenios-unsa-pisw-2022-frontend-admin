import { IAppState } from '@ngrx/app.state';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalityConvocationService } from '@app/core/services/convocation/modality-convocation.service';
import { TypeConvocationService } from '@app/core/services/convocation/type-convocation.service';
import { map } from 'rxjs';
import { ConvocationGeneralService } from './../../../../core/services/convocation/convocation-general.service';
import { Observable } from 'rxjs';
import {
  IConvocationResponse,
  ITypeConvocationResponse,
  IModalityConvocationResponse,
  IConvocationResponseDetail,
} from './../../../../shared/interfaces/convocation.interface';
import { ManageConvocationsRouterModule } from './../../manage-convocations.routes';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { getAllConvocationGeneralStateSelector } from '@app/ngrx/selectors/convocation/convocation-general.selector';
import { convocationGeneralGetAllRequestAction } from '@app/ngrx/actions/convocation/convocation-general.actions';

@Component({
  selector: 'app-list-convocation',
  // providers: [MessageService],
  templateUrl: './list-convocation.component.html',
  styleUrls: ['./list-convocation.component.scss'],
})
export class ListConvocationComponent implements OnInit {
  createConvocationLink =
    '../' +
    ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION;

  convocations$: Observable<IConvocationResponseDetail[]>;
  typesConvocation$: Observable<ITypeConvocationResponse[]>;
  modalities$: Observable<IModalityConvocationResponse[]>;

  loading: boolean = true;

  constructor(
    private convocationGeneralService: ConvocationGeneralService,
    private typeConvocationService: TypeConvocationService,
    private modalityConvocationService:ModalityConvocationService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private store:Store<IAppState>
  ) // private messageService: MessageService
  {
    this.convocations$ = new Observable<IConvocationResponseDetail[]>();

    this.typesConvocation$ = new Observable<ITypeConvocationResponse[]>();

    this.modalities$ = new Observable<IModalityConvocationResponse[]>();

  }

  ngOnInit() {
    this.loading = false;

    this.store.dispatch(convocationGeneralGetAllRequestAction())
    this.convocations$ = this.store.select(getAllConvocationGeneralStateSelector);

    this.typesConvocation$ = this.typeConvocationService
      .getAllTypeConvocations()
      .pipe(map((data) => data.data));

    this.modalities$ = this.modalityConvocationService
      .getAllModalityConvocations()
      .pipe(map((data) => data.data));
  }

  clear(table: Table) {
    table.clear();
  }

  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }
  viewConvocation(id:number){
    this.router.navigate(["../"+ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_VIEW_CONVOCATION_COEVAN+"/"+id],{relativeTo: this.activatedRoute})
  }
}
