import { AppError } from '../common/error/app-error';
import { NotAuthorized } from '../common/error/notauthorized';
import { BadInout } from '../common/error/bad-input';
import { NotFoundError } from '../common/error/NotFoundError';
import { Observable } from 'rxjs/Rx';
import { contentHeaders } from '../common/headers';


import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { UrlService } from '../common/url.service';
import { User } from '../model/user';
import { RepogitoryService } from '../common/repogitory.service';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class RegistrationService {
   headers = new HttpHeaders();
  
   baseUrl:string;
   loginUrl:string;
  constructor(private http:Http,private urlService:UrlService) {
    this.baseUrl=environment.api;
    this.loginUrl=environment.apiLogin;
   this. headers =this.headers.set('Content-Type', 'application/json; charset=utf-8');
   }
   reister(model:User) {
    
    return this.http.post(this.baseUrl+this.urlService.register,model,{ headers:new Headers(this.headers) }).catch(this.handleError);
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
  
  login(model:User) {
   
    

    let options = new RequestOptions(
        { headers: contentHeaders });

    var credentials = {
        grant_type: 'password',
        email: model.userName,
        password: model.password
    };
   
   let m='username='+model.email+'&password='+model.password+'&grant_type=password';
    return this.http.post(this.loginUrl, m, options);
        
}

}
