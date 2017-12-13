
import { contentHeaders } from './headers';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../model/userProfile';

@Injectable()
export class RepogitoryService {

 
  header=new Headers({'Content-Type':'application/json'}) 
   options = new RequestOptions(
    { headers: contentHeaders });


  constructor(private http:Http,private authProfile:UserProfile) { 
   
    
  }

  post(url:string,data:any){
    
    return  this.http.post(url,data,this.options);

   }
   postAuth(url:string,data:any){
    console.log('PostAuth');
    let options = null;
    let profile = this.authProfile.getProfile();

    console.log('profile',profile);

    if (profile != null && profile != undefined) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
        options = new RequestOptions({ headers: headers });
    }

    return  this.http.post(url,data,options);

   }

  get(url:string,data:any){
    return this.http.get(url+"/"+data);
  } 
}
