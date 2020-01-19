import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'Update',},
        {label: 'Delete'},
        {label: 'Angular.io'},
        {label: 'Setup',}
    ];
}

  public val: number;

  items: MenuItem[];
}
