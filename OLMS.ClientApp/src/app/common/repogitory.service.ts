import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class RepogitoryService {

  baseUrl:string;
  header=new Headers({'Content-Type':'application/json'}) 
  constructor(private http:Http) { 
    this.baseUrl=environment.api;
  }

  post(subUrl:string,entity:any){
    return  this.http.post(this.baseUrl+subUrl,entity,{headers : this.header});

   }

  get(subUrl:string,entity:any){
    return this.http.get(this.baseUrl+subUrl+entity);
  } 
}
