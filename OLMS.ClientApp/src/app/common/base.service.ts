import { RepogitoryService } from './repogitory.service';
import { Injectable } from '@angular/core';
import { Entity } from '../model/entity';


@Injectable()
export class BaseService<T> {

  constructor(public repo:RepogitoryService) { }
  save(data: Entity,commad:string) {
    this.repo.post(commad,data);
  }
}
