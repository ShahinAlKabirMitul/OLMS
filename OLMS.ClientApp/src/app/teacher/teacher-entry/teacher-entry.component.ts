import { Router } from '@angular/router';
import { TeacherService } from './../../service/teacher.service';
import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-entry',
  templateUrl: './teacher-entry.component.html',
  styleUrls: ['./teacher-entry.component.css']
})
export class TeacherEntryComponent implements OnInit {
  teacher:Teacher;
  constructor(private techerService:TeacherService,private router:Router) { 
    this.teacher=new Teacher();
  }

  ngOnInit() {
  }
   save(){
    console.log(this.teacher);
   let result=  this.techerService.addStudnet(this.teacher).subscribe(s=>{
    this.router.navigateByUrl('/teacher');
   });
 }
}
