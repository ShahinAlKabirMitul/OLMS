import { environment } from './../../environments/environment';


import { StudentRequestModel } from '../model/studentRequestModel';
import { Student } from './../model/student';
import { Injectable } from '@angular/core';

import { Http,Response,Headers } from '@angular/http';
@Injectable()
export class StudentService {
 baseUrl:string;

  constructor(private http:Http) { 
  //  this.baseUrl='http://localhost:58031/api/';
    this.baseUrl=environment.api;
  }
  addStudnet(student:Student){
    console.log(student);
    const header=new Headers({'Content-Type':'application/json'}) 
    return this.http.post(this.baseUrl+'student',student,{headers : header});
   }

   Search(student:StudentRequestModel){
    console.log(student);
    const header=new Headers({'Content-Type':'application/json'}) 
    return this.http.post(this.baseUrl+'studentquery',student,{headers : header});
   }

}
