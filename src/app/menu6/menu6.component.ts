import { Component, OnInit, Input } from '@angular/core';
import { Data } from './Data';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-menu6',
  templateUrl: './menu6.component.html',
  styleUrls: ['./menu6.component.css']
})
export class Menu6Component implements OnInit {
  dataSource : MatTableDataSource<any>;
  displayedColumns: Array<string> = ['id','password'];
  dataList = [{ id: 12000, password: "food" },{ id: 10000, password: "beverage" },{ id: 12000, password: "dissert" }];

  constructor() { }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataList);
  }
  onDataChange(data){
    if(data === "all"){
      this.dataList = [];
    }
    else if(data === "one"){
      this.dataList.pop();
    }
    else{
      console.info(data);
    this.dataList.push(data);
    console.info(this.dataSource);
    console.info(this.dataSource);
    }
    
    this.dataSource.data = this.dataList;
    
  }
  
  onClickRow(data:any){
    console.log(data);
  }
}
