
import { BaseService } from './../../common/base.service';
import { BaseController } from '../../controller/baseController';


import { any } from 'codelyzer/util/function';
import { serialize } from '@angular/compiler/src/i18n/serializers/xml_helper';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { async } from 'rxjs/scheduler/async';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-teacher-entry',
  templateUrl: './teacher-entry.component.html',
  styleUrls: ['./teacher-entry.component.css']
})
export class TeacherEntryComponent extends BaseController<Teacher>  implements OnInit {
 
  title='Teacher Entry';
  id:string;
  constructor(public service:TeacherService,private router:Router,private route:ActivatedRoute) { 
    super(service);
   // this.model=new Teacher();
    this.reset();
    this.id= this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    // if(this.id){
    //   this.editMode=true;
    //     this.subscription= this.service.getDataById(this.id).subscribe( (data:any) =>{
    //      this.editMode=true;
    //      console.log(data);
    //     this.model=data;
        
         
    //      //this.initForm();
    //   });
    // }
  }

  reset(){
   
   this.model=new Teacher();
  
 }
}
