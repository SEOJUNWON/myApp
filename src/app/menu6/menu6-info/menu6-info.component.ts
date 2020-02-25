import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Data } from '../Data';
import { Menu6DetailComponent } from '../menu6-detail/menu6-detail.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-menu6-info',
  templateUrl: './menu6-info.component.html',
  styleUrls: ['./menu6-info.component.css']
})
export class Menu6InfoComponent implements OnInit {
  dataList:Array<Data>;
  displayedColumns:['id','pw'];
  detailOpened: boolean;
  data2 = ['a','b','c','d'];
  dataSource : MatTableDataSource<Data>;
  @Input() data: Data;

  constructor() { }

  ngOnInit() {
    console.info(this.data);
    this.dataSource = new MatTableDataSource();
    if (this.data){
      this.dataList.push(this.data);
    }
    this.dataSource.data = this.dataList;
    console.info(this.dataSource);
  }

  onClickRow(data:any){
    console.log(data);
  }
  onClickAdd(){

  }

}
