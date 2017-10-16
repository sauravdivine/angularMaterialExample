import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-multi-row-toolbar',
  templateUrl: './multi-row-toolbar.component.html',
  styleUrls: ['./multi-row-toolbar.component.scss']
})
export class MultiRowToolbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
