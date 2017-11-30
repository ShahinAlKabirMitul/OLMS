import { UrlService } from '../common/url.service';
import { RepogitoryService } from '../common/repogitory.service';
import { Content } from '../model/content';
import { BaseService } from '../common/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentService extends BaseService<Content> {

  constructor(public repo:RepogitoryService,public urlService:UrlService ){
    super(repo,urlService.teacher);
  }

}
