import { any } from 'codelyzer/util/function';
import { serialize } from '@angular/compiler/src/i18n/serializers/xml_helper';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { async } from 'rxjs/scheduler/async';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from './../../service/teacher.service';
import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-entry',
  templateUrl: './teacher-entry.component.html',
  styleUrls: ['./teacher-entry.component.css']
})
export class TeacherEntryComponent implements OnInit {
  model:Teacher;
  title='Teacher Entry';
  id:string;
  editMode:boolean;
  subscription:Subscription;
  constructor(private techerService:TeacherService,private router:Router,private route:ActivatedRoute) { 
    this.model=new Teacher();
    this.id= this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    if(this.id){
      this.editMode=true;
        this.subscription= this.techerService.getDataById(this.id).subscribe( (data:any) =>{
         this.editMode=true;
         console.log(data);
        this.model=data;
        
         
         //this.initForm();
      });
    }
  }
  async save(){
  
    await this.techerService.save(this.model).toPromise();
    this.router.navigateByUrl('/teacher');
 }
 reset(){
   this.model=new Teacher();
 }
}
