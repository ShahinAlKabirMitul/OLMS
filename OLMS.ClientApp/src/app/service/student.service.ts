import { UrlService } from './../common/url.service';
import { BaseService } from '../common/base.service';
import { RepogitoryService } from './../common/repogitory.service';
import { StudentRequestModel } from './../request.model/studentRequestModel';
import { Subject } from 'rxjs/Rx';


import { Student } from './../model/student';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService extends BaseService<Student> {
  constructor(public repo:RepogitoryService,public urlService:UrlService) { 
    super(repo,urlService.student);
  }
  

}
