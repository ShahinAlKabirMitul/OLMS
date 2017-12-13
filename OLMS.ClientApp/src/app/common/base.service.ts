import { Entity } from './../model/entity';



import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { RepogitoryService } from './repogitory.service';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable()

export class BaseService<T> {
  model:T;
  baseApiUrl:string;
  constructor(public repo:RepogitoryService,public modelUrl:string) {
    this.baseApiUrl=environment.api;
   }
  


  save(model) {
    
    let url=this.baseApiUrl+this.modelUrl+'/add'
    return this.repo.postAuth(url,model);
  }

   getDataById(id: string):Observable<T> {
    let url=this.baseApiUrl+this.modelUrl+'query'
    return this.repo.get(url,id).map( (res)=>{ return <T> res.json()})
  }
  
   search(viewModel:any):Observable<T[]> {
    let url=this.baseApiUrl+this.modelUrl+'query'
    return this.repo.postAuth(url,viewModel).map( res=>res.json());
   // return data.subscribe(s=>)
  }

}
