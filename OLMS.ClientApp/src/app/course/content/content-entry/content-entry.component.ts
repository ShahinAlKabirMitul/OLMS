import { Content } from '../../../model/content';
import { BaseController } from '../../../common/controller/baseController';
import { ContentService } from '../../../service/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-entry',
  templateUrl: './content-entry.component.html',
  styleUrls: ['./content-entry.component.css']
})
export class ContentEntryComponent extends BaseController<Content> implements OnInit {

  constructor(service:ContentService) {super(service);
  }
 
   ngOnInit() {
   }
 
   reset() {
     throw new Error("Method not implemented.");
   }

}
