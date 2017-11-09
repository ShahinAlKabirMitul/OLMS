import { Student } from './../../model/student';
import { async } from '@angular/core/testing';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { StudentService } from './../../service/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

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
  public options = {
    position: ["right"],
    timeOut: 0,
    lastOnBottom: true
  }
  constructor(private studentService:StudentService,
    private router:Router, private route:ActivatedRoute,private _service: NotificationsService) {
      this.id= this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.initForm();
    if(this.id){
      this.editMode=true;
        this.subscription= this.studentService.getDataById(this.id).subscribe( (s:any) =>{
         this.editMode=true;
         this.model=s;
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
     this._service.success("Save");
    })
    //this.router.navigateByUrl('/student');
  }
  private initForm(){

    let studentName='';
    let address='';
    let phone='';
    if(this.editMode){
      studentName=this.model.name;
      address=this.model.address;
      phone=this.model.phone;
    }
    this.studentForm = new FormGroup({
     'name':new FormControl(studentName,Validators.required),
     'address':new FormControl(address,Validators.required),
     'phone':new FormControl(phone,Validators.required),
   });

  }
}
