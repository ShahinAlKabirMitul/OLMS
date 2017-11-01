
import { RepogitoryService } from './repogitory.service';
import { Injectable } from '@angular/core';
import { Entity } from '../model/entity';


@Injectable()

export class BaseService<T> {

  constructor(public repo:RepogitoryService,public subUrl:string) {
   }
   
  save(model: Entity) {
    return this.repo.post(this.subUrl,model);
  }
  search(viewModel:any) {
    return this.repo.post(this.subUrl+'query',viewModel);
   }
   getDataById(id: string) {
    return this.repo.get(this.subUrl+'query',id);
  }

}
