import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NgxDataTableDataSource } from './ngx-data-table-datasource';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styles: [
    `.detail-table {display: flex;flex-direction: column;display: block;margin: 10px;width: 100%;}
    .expand-icon {color: rgba(0,0,0,.44);font-size: 12px; margin-right: 5px; cursor: pointer;}
    .col-value:first-child span{margin-left: 15px;}
    .mat-form-field {padding: 10px 10px 0 10px;width: calc(100% - 20px);}
    
    table{
      width: 100%;
     }
     .mat-paginator-container {
      justify-content: flex-start;
     }
     .mat-column-id {
       word-wrap: break-word !important;
       white-space: unset !important;
       flex: 0 0 5% !important;
       width: 5% !important;
       overflow-wrap: break-word;     
       word-break: break-word;
     
       -ms-hyphens: auto;
       -moz-hyphens: auto;
       -webkit-hyphens: auto;
       hyphens: auto;
     }
     
     .mat-column-parentid {
       word-wrap: break-word !important;
       white-space: unset !important;
       flex: 0 0 7% !important;
       width: 7% !important;
       overflow-wrap: break-word;     
       word-break: break-word;
     
       -ms-hyphens: auto;
       -moz-hyphens: auto;
       -webkit-hyphens: auto;
       hyphens: auto;
     }
     
     .mat-column-name {
       word-wrap: break-word !important;
       white-space: unset !important;
       flex: 0 0 17% !important;
       width: 17% !important;
       overflow-wrap: break-word;     
       word-break: break-word;
     
       -ms-hyphens: auto;
       -moz-hyphens: auto;
       -webkit-hyphens: auto;
       hyphens: auto;
     }
     
     .mat-column-active {
       word-wrap: break-word !important;
       white-space: unset !important;
       flex: 0 0 5% !important;
       width: 5% !important;
       overflow-wrap: break-word;     
       word-break: break-word;
     
       -ms-hyphens: auto;
       -moz-hyphens: auto;
       -webkit-hyphens: auto;
       hyphens: auto;
     }
     
     .mat-column-createdname {
       word-wrap: break-word !important;
       white-space: unset !important;
       flex: 0 0 10% !important;
       width: 10% !important;
       overflow-wrap: break-word;     
       word-break: break-word;

       -ms-hyphens: auto;
       -moz-hyphens: auto;
       -webkit-hyphens: auto;
       hyphens: auto;
     }
     .mat-column-createdon {
      word-wrap: break-word !important;
      white-space: unset !important;
      flex: 0 0 15% !important;
      width: 15% !important;
      overflow-wrap: break-word;     
      word-break: break-word;

      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
    .mat-column-modifiedname {
      word-wrap: break-word !important;
      white-space: unset !important;
      flex: 0 0 9% !important;
      width: 9% !important;
      overflow-wrap: break-word;     
      word-break: break-word;

      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
    .mat-column-modifiedon {
      word-wrap: break-word !important;
      white-space: unset !important;
      flex: 0 0 12% !important;
      width: 12% !important;
      overflow-wrap: break-word;     
      word-break: break-word;

      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
  
  mat-paginator .mat-paginator-container {
    min-width: 1500px;
    background-color: #fff;
  }    
  @media only screen and (max-width: 600px) {
    .mat-row, .mat-header-row {min-width: 1424px;width: 100%;}
    .mat-paginator .mat-paginator-outer-container .mat-paginator-container{
      min-width: 1424px !important;
      width: 100%;
    }
  mat-paginator>div>div.mat-paginator-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 56px;
    padding: 0 8px;
    /* flex-wrap: wrap-reverse; */
    width: 100%;
}
  }
    `
  ],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class NgxDataTableComponent {
  @Input()
  set data(_data: any[]) {
    if (_data) {
      this.dataSource = new NgxDataTableDataSource(
        this.paginator,
        _data,
        this.sort
      );
      this.displayedColumns = Object.keys(_data[0]).filter(
        key => key !== 'details'
      );
    }
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: NgxDataTableDataSource;
  checked = true;
  @Output() messageEvent = new EventEmitter<Object>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: Array<string>;
  expandedElement: Array<string>;
  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');

  /**
   * expand collapse a row
   * @param row
   */
  toggleRow(row) {
    console.log(this.expandedElement);

    if (this.expandedElement === row) {
      this.expandedElement = null;
    } else {
      this.expandedElement = row;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
  receiveMessage(event) {
    this.messageEvent.emit(event);
  }
  actionModule(event,id, actionName) {
    event.preventDefault();
    console.log(id,actionName);
    let obj = {
      _id: id,
      name: actionName
    }
    this.messageEvent.emit(obj);
  }
}
