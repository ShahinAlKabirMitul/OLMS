import { Student } from '../../model/student';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { StudentService } from './../../service/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {
  studentForm:FormGroup;
  id;
  editMode:boolean;
  student:Student;
  constructor(private studentService:StudentService,
    private router:Router, private route:ActivatedRoute) {
      this.id= this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.initForm();
    if(this.id){
      this.editMode=true;
      this.studentService.getStudentById(this.id).subscribe(s=>{
         this.editMode=true;
         this.student=s;
         console.log(s);
         
         this.initForm();
      });
    }
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
    if(this.editMode){
      studentName=this.student["Name"];
      address=this.student["Address"];
      phone=this.student["Phone"];
    }
    this.studentForm = new FormGroup({
     'name':new FormControl(studentName,Validators.required),
     'address':new FormControl(address,Validators.required),
     'phone':new FormControl(phone,Validators.required),
   });

  }
}
