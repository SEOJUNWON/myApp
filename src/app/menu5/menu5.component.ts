import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-menu5',
  templateUrl: './menu5.component.html',
  styleUrls: ['./menu5.component.css']
})
export class Menu5Component implements OnInit {
  private API_URI: string = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=MMQF%2B2PVT%2FRg%2FRj5iERypyuUblwkq%2BKJlOAeummIBAqGOxnbijM5zQqkQvMR3sZ8RTLPFhHowuKnoa9yPZAC4g%3D%3D&numOfRows=10&pageNo=4&sidoName=%EC%84%9C%EC%9A%B8&ver=1.3"
  public speakers: any;
  city:string;
  dust10: string;
  dust10grade: string;
  dust25: string;
  dust25grade: string;
  constructor(private _http: HttpClient,private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {
  }

  getDust(){
    this._http.get(this.API_URI,{responseType:'text'}).subscribe(result => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(result, 'text/xml');
      const obj:any = this.ngxXml2jsonService.xmlToJson(xml);
      console.log(obj);
      console.log(obj.response.body.items.item[0].stationName);
      this.city = "<"+obj.response.body.items.item[0].stationName+">";
      this.dust10 = obj.response.body.items.item[0].pm10Value;
      this.dust10grade = this.setGrade(obj.response.body.items.item[0].pm10Grade);
      this.dust25 = obj.response.body.items.item[0].pm25Value;
      this.dust25grade = this.setGrade(obj.response.body.items.item[0].pm25Grade);
    });
  }

  setGrade(grade:string){

    let gradeNum = parseInt(grade);
    switch (gradeNum){
      case 1 : return "좋음"
      case 2 : return "보통"
      case 3 : return "나쁨"
      case 4 : return "매우나쁨"
    }
    
  }

}
