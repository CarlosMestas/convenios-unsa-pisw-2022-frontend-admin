import { ModalityConvocationService } from '@app/core/services/convocation/modality-convocation.service';
import { TypeConvocationService } from '@app/core/services/convocation/type-convocation.service';
import { map } from 'rxjs';
import { ConvocationGeneralService } from './../../../../core/services/convocation/convocation-general.service';
import { Observable } from 'rxjs';
import {
  IConvocationResponse,
  ITypeConvocationResponse,
  IModalityConvocationResponse,
} from './../../../../shared/interfaces/convocation.interface';
import { ManageConvocationsRouterModule } from './../../manage-convocations.routes';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

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

  convocations$: Observable<IConvocationResponse[]>;
  typesConvocation$: Observable<ITypeConvocationResponse[]>;
  modalities$: Observable<IModalityConvocationResponse[]>;

  loading: boolean = true;

  constructor(
    private convocationGeneralService: ConvocationGeneralService,
    private typeConvocationService: TypeConvocationService,
    private modalityConvocationService:ModalityConvocationService
  ) // private messageService: MessageService
  {
    this.convocations$ = new Observable<IConvocationResponse[]>();

    this.typesConvocation$ = new Observable<ITypeConvocationResponse[]>();

    this.modalities$ = new Observable<IModalityConvocationResponse[]>();

  }

  ngOnInit() {
    this.loading = false;
    this.convocations$ = this.convocationGeneralService
      .getConvocationGeneralAll()
      .pipe(map((data) => data.data));

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
}
