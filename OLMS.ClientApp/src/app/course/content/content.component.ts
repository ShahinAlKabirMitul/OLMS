import { ContentService } from '../../service/content.service';
import { Content } from '../../model/content';
import { BaseController } from '../../common/controller/baseController';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends BaseController<Content> implements OnInit  {
  

  constructor(service:ContentService) {super(service);
 }

  ngOnInit() {
  }

  reset() {
    throw new Error("Method not implemented.");
  }

}
