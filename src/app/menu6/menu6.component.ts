import { Component, OnInit } from '@angular/core';
import { Data } from './Data';

@Component({
  selector: 'app-menu6',
  templateUrl: './menu6.component.html',
  styleUrls: ['./menu6.component.css']
})
export class Menu6Component implements OnInit {
  data:Data;
  constructor() { }
  
  ngOnInit() {
  }
  onDataChange(data){
    console.info(data);
    this.data = data;

  }
}
