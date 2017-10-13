import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar-left',
  templateUrl: './side-nav-bar-left.component.html',
  styleUrls: ['./side-nav-bar-left.component.css']
})
export class SideNavBarLeftComponent implements OnInit {
  folders = [
    {
      name: 'My Drive',
      icon: 'storage'
    },

    {
      name: 'Shared with me',
      icon: 'supervisor_account'
    }
    ,
    {
      name: 'Recents',
      icon: 'query_builder'
    },
    {
      name: 'Stared',
      icon: 'star_rate'
    },
    {
      name: 'Trash',
      icon: 'delete'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
