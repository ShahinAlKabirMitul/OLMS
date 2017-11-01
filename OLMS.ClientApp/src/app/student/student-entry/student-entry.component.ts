import { Student } from './../../model/student';
import { async } from '@angular/core/testing';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { StudentService } from './../../service/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit,OnDestroy {
  studentForm:FormGroup;
  id;
  editMode:boolean;
  model:Student;
  subscription=new Subscription();
  constructor(private studentService:StudentService,
    private router:Router, private route:ActivatedRoute) {
      this.id= this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.initForm();
    if(this.id){
      this.editMode=true;
        this.subscription= this.studentService.getDataById(this.id).subscribe( (s:Response) =>{
         this.editMode=true;
         this.model=s.json();
         console.log(s);
         
         this.initForm();
      });
    }
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSubmit(){
    
    this.studentService.save(this.studentForm.value).subscribe((response:Response)=>{
     
    })
    this.router.navigateByUrl('/student');
  }
  private initForm(){

    let studentName='';
    let address='';
    let phone='';
    if(this.editMode){
      studentName=this.model["Name"];
      address=this.model["Address"];
      phone=this.model["Phone"];
    }
    this.studentForm = new FormGroup({
     'name':new FormControl(studentName,Validators.required),
     'address':new FormControl(address,Validators.required),
     'phone':new FormControl(phone,Validators.required),
   });

  }
}
