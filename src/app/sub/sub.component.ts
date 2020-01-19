import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
