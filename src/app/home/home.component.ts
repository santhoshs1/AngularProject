import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  yourname:string="my name is";
  num1:number=10;
  num2:number=20;

  addnumbers(){
    return this.num1+this.num2;
  }
  //property binding
  
    imgurl="http://imglink";

  //event binding
  incrementvalue=0;
  incrementcount(){
    this.incrementvalue+=1;
  }

  //two way binding
  name!:string;
  age!:number;
  

  // constructor() { }

  // ngOnInit(): void {
  // }

}
