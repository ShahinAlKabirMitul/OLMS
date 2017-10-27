import { StudentRequestModel } from './../request.model/studentRequestModel';

import { Student } from './../model/student';
import { environment } from './../../environments/environment';
import { Http, Headers,Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService {

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
    return this.http.post(this.baseUrl+'teacherquery',student,{headers : header});
   }
   getStudentById(id:string){
     let studentObj:Student;
     return  this.http.get(this.baseUrl+'teacherquery/'+id).map((response:Response)=>{
        const student:Student=response.json();
        return student;
      })
      //return studentObj;
   }

}
