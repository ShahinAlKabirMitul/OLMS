

import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { UrlService } from '../common/url.service';
import { User } from '../model/user';
import { RepogitoryService } from '../common/repogitory.service';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class RegistrationService {
   headers = new HttpHeaders();
  
  baseUrl:string;
  constructor(private http:Http,private urlService:UrlService) {
    this.baseUrl=environment.api;
   this. headers =this.headers.set('Content-Type', 'application/json; charset=utf-8');
   }
   reister(model:User) {
    
    return this.http.post(this.baseUrl+this.urlService.register,model,{ headers:new Headers(this.headers) })
  }

}
