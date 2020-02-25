import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Menu6InfoComponent } from '../menu6-info/menu6-info.component';
import { Data } from '../Data';
import { MatDialog } from '@angular/material';
import { Menu6DetailComponent } from '../menu6-detail/menu6-detail.component';

@Component({
  selector: 'app-menu6-search',
  templateUrl: './menu6-search.component.html',
  styleUrls: ['./menu6-search.component.css']
})
export class Menu6SearchComponent implements OnInit {
  form: FormGroup;
  data : Array<Data> = [];
  id:string="123";
  pw:string="123123";
  isPopup: boolean;

  @ViewChild(Menu6InfoComponent,{static: false}) menu6InfoComponent: Menu6InfoComponent;
  @Output() datachange: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
       user_id: [''],
      user_pw: ['']
    });
  }

  onClickSearch() {
  }

  onClickAdd(ispopup:boolean){
    if(ispopup){
      let modalRef = this.dialog.open(Menu6DetailComponent, {
        width: '650px'
       });
   
       modalRef.afterClosed().subscribe(result => {
         if(result){
           console.info(result);
           let id : string = String(result.id);
           let pw : string = String(result.pw);
           let tempData = new Data(id,pw);
           console.info(tempData);
           this.datachange.emit(tempData);
         }
       });
    }
    else{
      let id = String(this.form.controls.user_id.value);
      let pw = String(this.form.controls.user_pw.value);
      let tempData = new Data(id,pw);
      this.datachange.emit(tempData);
      this.initializeForm();
    }
    
  }

  onClickDel(isAllDel:boolean){
    if(isAllDel){
      this.datachange.emit("all");
    }
    else{
      this.datachange.emit("one");
    }
    
  }
}

