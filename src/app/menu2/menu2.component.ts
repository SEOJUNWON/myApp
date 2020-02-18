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
  imageUrl:string;
 

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
    this.imageUrl = "assets/accent_black.png";
    this.calvalue = this.value/1000;
  }

  changeSelect(event){
    if(event.value == "kia"){
      this.car = "K3";
    }
    else if(event.value == "hyundai"){
      this.car = "accent";
    }
    else if(event.value == "chevrolet"){
      this.car = "spark";
    }
    if(this.brand =="hyundai"){
      if(this.car =="accent"){
        if(this.color =='black'){
          this.imageUrl = "assets/accent_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/accent_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/accent_gray.png"
        }
        else {
          this.imageUrl = "assets/accent_blue.png"
        }

      }
      else if(this.car =="avante"){
        if(this.color =='black'){
          this.imageUrl = "assets/avante_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/accent_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/avante_gray.png"
        }
        else {
          this.imageUrl = "assets/avante_blue.png"
        }
      }
      else if(this.car =="sonata"){
        if(this.color =='black'){
          this.imageUrl = "assets/sonata_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/sonata_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/sonata_gray.png"
        }
        else {
          this.imageUrl = "assets/sonata_blue.png"
        }
      }
      else{
        if(this.color =='black'){
          this.imageUrl = "assets/grandeur_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/grandeur_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/grandeur_gray.png"
        }
        else {
          this.imageUrl = "assets/grandeur_blue.png"
        }
      }

    }
    else if(this.brand =="kia"){
      if(this.car =="K3"){
        if(this.color =='black'){
          this.imageUrl = "assets/k3_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/k3_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/k3_gray.png"
        }
        else {
          this.imageUrl = "assets/k3_blue.png"
        }

      }
      else if(this.car =="K5"){
        if(this.color =='black'){
          this.imageUrl = "assets/k5_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/k5_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/k5_gray.png"
        }
        else {
          this.imageUrl = "assets/k5_blue.png"
        }
      }
      else if(this.car =="K7"){
        if(this.color =='black'){
          this.imageUrl = "assets/k7_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/k7_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/k7_gray.png"
        }
        else {
          this.imageUrl = "assets/k7_blue.png"
        }
      }
      else{
        if(this.color =='black'){
          this.imageUrl = "assets/k9_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/k9_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/k9_gray.png"
        }
        else {
          this.imageUrl = "assets/k9_blue.png"
        }
      }

    }
    else if(this.brand =="chevrolet"){
      if(this.car =="spark"){
        if(this.color =='black'){
          this.imageUrl = "assets/spark_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/spark_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/spark_gray.png"
        }
        else {
          this.imageUrl = "assets/spark_blue.png"
        }

      }
      else if(this.car =="cruze"){
        if(this.color =='black'){
          this.imageUrl = "assets/cruze_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/cruze_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/cruze_gray.png"
        }
        else {
          this.imageUrl = "assets/cruze_blue.png"
        }
      }
      else if(this.car =="malibu"){
        if(this.color =='black'){
          this.imageUrl = "assets/malibu_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/malibu_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/malibu_gray.png"
        }
        else {
          this.imageUrl = "assets/malibu_blue.png"
        }
      }
      else{
        if(this.color =='black'){
          this.imageUrl = "assets/camaro_black.png"
        }
        else if(this.color =='white'){
          this.imageUrl = "assets/camaro_white.png"
        }
        else if(this.color =='gray'){
          this.imageUrl = "assets/camaro_gray.png"
        }
        else {
          this.imageUrl = "assets/camaro_blue.png"
        }
      }

    }

  }

}
