import { Student } from './../model/student';
import { Injectable } from '@angular/core';

import { Http,Response,Headers } from '@angular/http';
@Injectable()
export class StudentService {
 

  constructor(private http:Http) { }
  addStudnet(student:Student){
    console.log(student);
    const header=new Headers({'Content-Type':'application/json'}) 
    return this.http.post('http://localhost:58031/api/student',student,{headers : header});
   }

}
