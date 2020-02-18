import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  isStart: boolean;
  time: any = new Date();
  displayTime:string ;
  minute:string;
  mSecond:string;
  second:string;
  a:number = 0;
  b:number = 0;
  c:number = 0;
  interval:any;
  lap:Array<String> = [];
  isReset:boolean;
  isFirst:boolean;

  constructor() { }

  ngOnInit() {
    this.isStart = true;
    this.isFirst = true;
    this.resetTime();
  }

  firstClick(){
    this.isFirst = false;
  if(this.isStart == true){
    this.isStart = false;
    this.startTime();
  }
  else {
    this.isStart = true;
    this.stopTime();
  }

  }

resetTime(){
  
  if(this.isStart ==false){
    this.addLap();
  }
  else{
    this.minute = "00";
    this.second = "00";
    this.mSecond = "00";
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.lap = [];
    this.isFirst = true;
    this.displayTime = this.minute+" : "+ this.second+" : "+ this.mSecond;
  }
  
}

startTime(){
  this.interval = setInterval(()=>{
    
    this.a++;
    this.mSecond = this.a.toString();
    if(this.a>99){
      this.a = 0;
      this.mSecond = "00";
      this.b++;
      this.second = this.b.toString();
    }
    if(this.b>59){
      this.b = 0;
      this.second = "00";
      this.c++;
      this.minute = this.c.toString();
    }
    this.cleanTime();
    this.displayTime = this.minute+" : "+ this.second+" : "+ this.mSecond;

  },10)
}

stopTime(){
  clearInterval(this.interval);
}

cleanTime(){
  if (this.mSecond.length < 2) {
    this.mSecond = '0' + this.mSecond;
  }

  if (this.minute.length < 2) {
    this.minute = '0' + this.minute;
  }

  if (this.second.length < 2) {
    this.second = '0' + this.second;
  }
}

addLap(){
    this.lap.push(this.displayTime);
    console.info(this.lap);
}
}
