import { UrlService } from '../common/url.service';
import { RepogitoryService } from '../common/repogitory.service';
import { Resource } from '../model/resource';
import { BaseService } from '../common/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService extends BaseService<Resource> {

  constructor(public repo:RepogitoryService,public urlService:UrlService ){
    super(repo,urlService.resource);
  }
 
  

}
