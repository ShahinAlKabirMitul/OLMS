import { Entity } from './../model/entity';



import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { RepogitoryService } from './repogitory.service';
import { Injectable } from '@angular/core';



@Injectable()

export class BaseService<T> {
  model:T;
  constructor(public repo:RepogitoryService,public subUrl:string) {
   }
  


  save(model) {
    
    return this.repo.postAuth(this.subUrl+'/add',model);
  }
  // search(viewModel:any) {
  //   return this.repo.post(this.subUrl+'query',viewModel);
  //  }
   getDataById(id: string):Observable<T> {
    return this.repo.get(this.subUrl+'query',id).map( (res)=>{ return <T> res.json()})
  }
  //  search(viewModel:any):Observable<T[]> {
  //    return this.repo.post(this.subUrl+'query',viewModel).map( res=>res.json());
  //   // return data.subscribe(s=>)
  //  }
   search(viewModel:any):Observable<T[]> {
    return this.repo.postAuth(this.subUrl+'query',viewModel).map( res=>res.json());
   // return data.subscribe(s=>)
  }

}
