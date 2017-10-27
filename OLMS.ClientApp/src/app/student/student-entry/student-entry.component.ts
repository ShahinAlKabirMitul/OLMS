import { Subscription } from 'rxjs/Rx';
import { Student } from './../../model/student';

import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { StudentService } from './../../service/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit,OnDestroy {
  studentForm:FormGroup;
  student:Student;
  subscription:Subscription;
  id;
  constructor(private studentService:StudentService,
    private router:Router, private route:ActivatedRoute) {
      this.id= this.route.snapshot.paramMap.get('id');
      if(this.id){
        this.subscription= this.studentService.getStudentById(this.id).subscribe(sp=> {
          this.student=sp
          console.log(this.student);
        });
       
      }
      console.log(this.student);
   }

  ngOnInit() {
    this.initForm();
    
   
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSubmit(){
    
    this.studentService.addStudnet(this.studentForm.value).subscribe((response:Response)=>{
     
    })
    this.router.navigateByUrl('/student');
  }
  private initForm(){
    let studentName='';
    let address='';
    let phone='';
    this.studentForm = new FormGroup({
     'name':new FormControl(studentName,Validators.required),
     'address':new FormControl(address,Validators.required),
     'phone':new FormControl(phone,Validators.required),
   });

  }
}
