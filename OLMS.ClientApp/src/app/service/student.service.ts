import { StudentRequestModel } from './../request.model/studentRequestModel';
import { Subject } from 'rxjs/Rx';
import { environment } from './../../environments/environment';

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
   getStudentById(id:string){
     let studentObj:Student;
     return  this.http.get(this.baseUrl+'studentQuery/'+id).map((response:Response)=>{
        const student:Student=response.json();
        return student;
      })
      //return studentObj;
   }

}
