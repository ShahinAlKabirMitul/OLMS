import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  student:string;
  teacher:string;
  course:string;
  constructor() { 
    this.student="Student";
    this.teacher="Teacher";
    this.course="Course";
  }

}
