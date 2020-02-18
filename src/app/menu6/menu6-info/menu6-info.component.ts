import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Data } from '../Data';
import { Menu6DetailComponent } from '../menu6-detail/menu6-detail.component';

@Component({
  selector: 'app-menu6-info',
  templateUrl: './menu6-info.component.html',
  styleUrls: ['./menu6-info.component.css']
})
export class Menu6InfoComponent implements OnInit {
  dataList:Array<Data>;
  displayedColumns:['id','password'];
  detailOpened: boolean;
  data2 = ['a','b','c','d'];
  @Input('data') data: Data;

  constructor() { }

  ngOnInit() {
    console.info(this.data);
    if (this.data){
      this.dataList.push(this.data);
    }
    
  }

  onClickRow(data:any){
    console.log(data);
  }
  onClickAdd(){

  }

}
