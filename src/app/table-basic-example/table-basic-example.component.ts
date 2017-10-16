import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.scss']
})
export class TableBasicExampleComponent implements OnInit {
  displayedColumns = ['name', 'owner', 'last_modified', 'size'];
  dataSource = new ExampleDataSource();

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  owner: string, last_modified: number;
  size: string;
}

const data: Element[] = [
  { name: 'folder', owner: 'me', last_modified: 1.0079, size: '1 mb' },
  { name: 'mp3', owner: 'me', last_modified: 4.0026, size: '1 mb' },
  { name: 'Lithium', owner: 'me', last_modified: 6.941, size: '1 mb' },
  { name: 'Beryllium', owner: 'me', last_modified: 9.0122, size: '1 mb' },
  { name: 'Boron', owner: 'me', last_modified: 10.811, size: '1 mb '},
  { name: 'Carbon', owner: 'me', last_modified: 12.0107, size: '1 mb' },
  { name: 'Nitrogen', owner: 'me', last_modified: 14.0067, size: '1 mb' },
  { name: 'Oxygen', owner: 'me', last_modified: 15.9994, size: '1 mb '},
  { name: 'Fluorine', owner: 'me', last_modified: 18.9984, size: '1 mb '},
  { name: 'Neon', owner: 'me', last_modified: 20.1797, size: '1 mb' },
  { name: 'Sodium', owner: 'me', last_modified: 22.9897, size: '1 mb' },
  { name: 'Magnesium', owner: 'me', last_modified: 24.305, size: '1 mb' },
  { name: 'Aluminum', owner: 'me', last_modified: 26.9815, size: '1 mb' },
  { name: 'Silicon', owner: 'me', last_modified: 28.0855, size: '1 mb' },
  { name: 'Phosphorus', owner: 'me', last_modified: 30.9738, size: '1 mb' },
  { name: 'Sulfur', owner: 'me', last_modified: 32.065, size: '1 mb '},
  { name: 'Chlorine', owner: 'me', last_modified: 35.453, size: '1 mb' },
  { name: 'Argon', owner: 'me', last_modified: 39.948, size: '1 mb' },
  { name: 'Potassium', owner: 'me', last_modified: 39.0983, size: '1 mb' },
  { name: 'Calcium', owner: 'me', last_modified: 40.078, size: '1 mb' },
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() { }
}
