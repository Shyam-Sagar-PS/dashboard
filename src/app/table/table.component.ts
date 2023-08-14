import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'Status', 'Progress'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  name: string;
  position: number;
  Status: any;
  Progress: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Facebook', Status:'in progress', Progress: '50%'},
  {position: 2, name: 'Google', Status: 'completed', Progress: '100%'},
  {position: 3, name: 'Twitter', Status: 'in progress', Progress: '65%'},
  {position: 5, name: 'LinkedIn', Status: 'in progress', Progress: '75%'},
  {position: 6, name: 'Tesla', Status: 'in progress', Progress: '95%'},
  
];

