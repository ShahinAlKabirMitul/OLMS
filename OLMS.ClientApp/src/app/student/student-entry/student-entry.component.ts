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
  constructor(private studentService:StudentService) {

   }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
    console.log(this.studentForm)
    this.studentService.addStudnet(this.studentForm.value).subscribe((response:Response)=>{
      console.log(response);
    })
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
