import { Role } from '../model/role';
import { UrlService } from '../common/url.service';
import { RepogitoryService } from '../common/repogitory.service';
import { BaseService } from '../common/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleService extends BaseService<Role> {

  constructor(public repo:RepogitoryService,public urlService:UrlService ){
    super(repo,urlService.role);
  }
 
  

}
