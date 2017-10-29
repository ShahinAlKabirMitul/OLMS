import { RepogitoryService } from './../common/repogitory.service';
import { StudentRequestModel } from './../request.model/studentRequestModel';
import { Subject } from 'rxjs/Rx';


import { Student } from './../model/student';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  constructor(private repo:RepogitoryService) { 
  }
   addStudnet(student:Student){
    
    return this.repo.post('student',student);
   }

   Search(student:StudentRequestModel){
   
    const header=new Headers({'Content-Type':'application/json'}) 
    return this.repo.post('studentquery',student);
   }
   getStudentById(id:string){
     return  this.repo.get('studentQuery/',id);
   }

}
