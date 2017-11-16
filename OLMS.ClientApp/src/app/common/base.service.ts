import { Entity } from './../model/entity';



import { Observable } from 'rxjs/Rx';

import { RepogitoryService } from './repogitory.service';
import { Injectable } from '@angular/core';



@Injectable()

export class BaseService<T> {
  public subUrl:string;
  model:T;
  constructor(public repo:RepogitoryService) {
   // let d=this.createInstence(T) as Entity;

   }
  
  createInstence<T>(c:new ()=> Entity):Entity{
    return new c();

  }

  save(model) {
    return this.repo.post(this.subUrl+'/add',model);
  }
  // search(viewModel:any) {
  //   return this.repo.post(this.subUrl+'query',viewModel);
  //  }
   getDataById(id: string):Observable<T> {
    return this.repo.get(this.subUrl+'query',id).map( (res)=>{ return <T> res.json()})
  }
   search(viewModel:any):Observable<T[]> {
     return this.repo.post(this.subUrl+'query',viewModel).map( res=>res.json());
   }

}
