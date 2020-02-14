import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  hour: any;
  minute: any;
  second: any;
  clockStr: string;
  result:string;
  todayDate:any;
  showClock:boolean;
  todayDate2: any;
  todayDate3: any;
  todayDate4: any;
  country:string;
  utc:string;

  constructor() { 
    
  }

  ngOnInit() {
    this.utc = "GMT";
    this.todayDate = setInterval( () => { 
      this.todayDate = new Date(); 
  }, 1000);
  }

  
  isCountry(country:string){
    this.country = country;
    this.showClock = true;
    if(country =='New York'){
      this.utc = "EST";
    }
    else if(country == 'Seoul'){
      this.utc = "KST";
    }
    else if(country == 'London'){
      this.utc = "GMT";
    }
    else if(country == 'Auckland'){
      this.utc = "UTC+13";
    }
    else if(country == 'Seattle'){
      this.utc = "PST";
    }
    else if(country == 'Tokyo'){
      this.utc = "JST";
    }
    else if(country == 'Berlin'){
      this.utc = "UTC+1";
    }
    else if(country == 'Beijing'){
      this.utc = "UTC+8";
    }

  } 
  clockRun() {
    let time = new Date();
    this.hour = time.getHours();
    this.minute = time.getMinutes();
    this.second = time.getSeconds();
    
    if (this.hour.length < 2) {
      this.hour = '0' + this.hour;
    }

    if (this.minute.length < 2) {
      this.minute = '0' + this.minute;
    }

    if (this.second.length < 2) {
      this.second = '0' + this.second;
    }

    this.clockStr = this.hour + ' : ' + this.minute + ' : ' + this.second;
    this.result = this.clockStr
    console.log(this.result);
  }


}
