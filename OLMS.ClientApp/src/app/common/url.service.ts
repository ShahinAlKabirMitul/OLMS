import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  student:string;
  teacher:string;
  course:string;
  register:string;
  content:string;
  role:string;
  resource:string;

  constructor() { 

    this.student="Student";
    this.teacher="Teacher";
    this.course="Course";
    this.register="Account/register";
    this.content="Content";
    this.role="Role";
    this.resource="Resource";
  
  }

}
