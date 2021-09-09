import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit{
  @Input() employeeExp: string[];

  constructor() { }

  ngOnInit(){

  }

}
