import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  localTime;
  constructor() {
    this.localTime=new Date();
    console.log(this.mytiply(10,2));
   }

  ngOnInit() {
  }

  mytiply(a:number,b:number):number{
    return a*b;
  }
}
