import { BaseController } from '../../common/controller/baseController';




import { StudentService } from '../../service/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent extends BaseController<Student>  implements OnInit {

  constructor(service:StudentService) {
    super(service);
    this.reset();
 }

  ngOnInit() {
  }
reset(){
  this.model=new Student();
}
}
