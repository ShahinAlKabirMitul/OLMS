
import { contentHeaders } from './headers';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { UserProfile } from '../model/userProfile';

@Injectable()
export class RepogitoryService {

  baseUrl:string;
  header=new Headers({'Content-Type':'application/json'}) 
   options = new RequestOptions(
    { headers: contentHeaders });


  constructor(private http:Http,private authProfile:UserProfile) { 
    this.baseUrl=environment.api;
    
  }

  post(subUrl:string,data:any){
    return  this.http.post(this.baseUrl+subUrl,data,this.options);

   }
   postAuth(subUrl:string,data:any){
    console.log('PostAuth');
    let options = null;
    let profile = this.authProfile.getProfile();

    console.log('profile',profile);

    if (profile != null && profile != undefined) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
        options = new RequestOptions({ headers: headers });
    }

    return  this.http.post(this.baseUrl+subUrl,data,options);

   }

  get(subUrl:string,data:any){
    return this.http.get(this.baseUrl+subUrl+"/"+data);
  } 
}
