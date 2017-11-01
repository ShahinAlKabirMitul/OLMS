import { UrlService } from '../common/url.service';
import { BaseService } from './../common/base.service';
import { RepogitoryService } from '../common/repogitory.service';
import { Teacher } from './../model/teacher';

import { TeacherRequestModel } from './../request.model/teacher.request.model';

import { StudentRequestModel } from './../request.model/studentRequestModel';

import { Student } from './../model/student';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService extends BaseService<Teacher> {
 
  constructor(public repo:RepogitoryService,public urlService:UrlService ){
   
    super(repo,urlService.teacher);
    
  }
   getById(id:string){
     let studentObj:Student;
     return  this.getDataById(id);
  
   }

}
