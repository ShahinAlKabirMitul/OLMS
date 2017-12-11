import { UserProfile } from '../../model/userProfile';
import { overrideOptions } from '@angular/cli/utilities/override-options';
import { BaseController } from '../../common/controller/baseController';




import { StudentService } from '../../service/student.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent extends BaseController<Student>  implements OnInit ,OnDestroy {

  constructor(service:StudentService,public authProfile:UserProfile) {
    super(service,authProfile);
    this.reset();
 }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.reset();
  }
reset(){
  this.model=new Student();
}

}
