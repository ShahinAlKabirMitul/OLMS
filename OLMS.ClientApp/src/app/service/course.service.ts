import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';
import { Course } from '../model/Course';
import { RepogitoryService } from '../common/repogitory.service';
import { UrlService } from '../common/url.service';

@Injectable()
export class CourseService extends BaseService<Course> {

  constructor(public repo:RepogitoryService,public urlService:UrlService) { 
    super(repo,urlService.course);
  }
 }


