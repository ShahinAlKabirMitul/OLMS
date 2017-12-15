import { NotAuthorized } from './error/notauthorized';
import { Router } from '@angular/router';
import { NotFoundError } from './error/NotFoundError';
import { AppError } from './error/app-error';
import { BadInout } from './error/bad-input';

import 'rxjs/add/operator/map';
import { contentHeaders } from './headers';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../model/userProfile';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class RepogitoryService {

 
  header=new Headers({'Content-Type':'application/json'}) 
   options = new RequestOptions(
    { headers: contentHeaders });


  constructor(private http:Http,private authProfile:UserProfile,private route:Router) { 
   
    
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

    return  this.http.post(url,data,options).map(response => response.json())
    .catch(this.handleError);

   }

  get(url:string,data:any){
    return this.http.get(url+"/"+data).map(response => response.json())
    .catch(this.handleError);
  } 
  private handleError(error:Response){
    if(error.status===404){
      return Observable.throw(new NotFoundError())
          .catch(this.handleError);
    }
    else if(error.status===400)
      return Observable.throw(new BadInout(error.json()));
      else if(error.status===401){
        
        return Observable.throw(new NotAuthorized());
      }
     
    else{
      return Observable.throw(new AppError());
    }
  }
}
