import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-menu6-detail',
  templateUrl: './menu6-detail.component.html',
  styleUrls: ['./menu6-detail.component.css']
})
export class Menu6DetailComponent implements OnInit {
  form:FormGroup;
  @Output() submitComplete: EventEmitter<any> = new EventEmitter<any>();
  constructor(private dialogRef: MatDialogRef<Menu6DetailComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any,private formBuilder: FormBuilder) { }

  initializeForm() {
    this.form = new FormGroup({
      user_id: new FormControl(),
      user_pw: new FormControl()
    });
  }

  ngOnInit() {
    this.initializeForm()
  }
  onClickClose(){
    this.dialogRef.close();
  }

  onClickSave(){
    const returnData = {
      id : this.form.controls.user_id.value,
      pw : this.form.controls.user_pw.value
    }
    console.info(returnData);
    this.dialogRef.close(returnData);
  }

}
