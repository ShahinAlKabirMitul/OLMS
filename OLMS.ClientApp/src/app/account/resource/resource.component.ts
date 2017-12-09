

import { Resource, ResourceType } from '../../model/resource';
import { BaseController } from '../../common/controller/baseController';
import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../service/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent extends BaseController<Resource> implements OnInit {

   type = Array<ResourceType>();
  
  

  constructor(service:ResourceService) {
    super(service);
    this.reset();
     this.type = [
      new ResourceType('0', 'API'),
      new ResourceType('1', "Form"),
      new ResourceType('2', "Resource")
  ]
  
  
    
 }

 reset(){
   this.model=new Resource();
 }
  ngOnInit() {
  }

}
