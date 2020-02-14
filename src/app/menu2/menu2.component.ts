import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  checkDisabled: boolean = true;
  resultText: string = "This is div";
  count: number = 0;
  value:number= 0;
  color:string;
  brand:string;
  car:string;
  calvalue:number;
 

  sliderOnChange(value:number){
    this.calvalue = value/1000;
  }

  onClick=()=>{
    this.count++;
    this.resultText = "Clicked " + this.count + "times"
  }
  constructor() { }

  ngOnInit() {
    this.brand = "hyundai";
    this.car = "accent";
    this.color = "black";
    this.calvalue = this.value/1000;
  }

}
