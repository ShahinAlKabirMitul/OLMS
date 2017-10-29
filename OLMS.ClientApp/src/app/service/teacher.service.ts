import { BaseService } from './../common/base.service';
import { RepogitoryService } from '../common/repogitory.service';
import { Teacher } from './../model/teacher';

import { TeacherRequestModel } from './../request.model/teacher.request.model';

import { StudentRequestModel } from './../request.model/studentRequestModel';

import { Student } from './../model/student';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService {


  constructor(private repo:RepogitoryService,private baseService:BaseService<Teacher>) { 
   
  }
   add(teacher:Teacher){
    return this.baseService.save(teacher,'teacher')
   }

    Search(teacher:TeacherRequestModel) {
    return this.repo.post('teacherquery',teacher);
   }
   getById(id:string){
     let studentObj:Student;
     return  this.repo.get('teacherquery',id);
  
   }

}
