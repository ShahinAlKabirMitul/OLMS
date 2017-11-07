import { UrlService } from '../common/url.service';
import { BaseService } from './../common/base.service';
import { RepogitoryService } from '../common/repogitory.service';
import { Teacher } from './../model/teacher';



import { Student } from './../model/student';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService extends BaseService<Teacher> {
 
  constructor(public repo:RepogitoryService,public urlService:UrlService ){
    super(repo,urlService.teacher);
  }
  

}
