import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {
  private API_URI: string = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?serviceKey=MMQF%2B2PVT%2FRg%2FRj5iERypyuUblwkq%2BKJlOAeummIBAqGOxnbijM5zQqkQvMR3sZ8RTLPFhHowuKnoa9yPZAC4g%3D%3D&arsId=22272"
  public speakers: any;
  station: string;
  busname: string;
  firsttime: string;
  secondtime: string;
  

  ngOnInit() {
    
  }

  constructor(private _http: HttpClient,private ngxXml2jsonService: NgxXml2jsonService){
  
  }

  
  
  getBusInfo() {
    this._http.get(this.API_URI,{responseType:'xml'}).subscribe(result => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(result, 'text/xml');
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      console.log(obj);
      console.log(obj.ServiceResult.msgBody.itemList[0].rtNm);
      this.station = "<"+obj.ServiceResult.msgBody.itemList[0].stNm+">";
      this.busname = obj.ServiceResult.msgBody.itemList[0].rtNm;
      this.firsttime = obj.ServiceResult.msgBody.itemList[0].arrmsg1;
      this.secondtime = obj.ServiceResult.msgBody.itemList[0].arrmsg2;
    });
      
        
      
    };
   
  
}
