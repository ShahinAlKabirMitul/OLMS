import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../model/role';
import { BaseController } from '../../common/controller/baseController';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent extends BaseController<Role> implements OnInit {

  constructor(public service:RoleService,private router:Router,private route:ActivatedRoute) { 
    super(service);
   // this.model=new Teacher();
   this.model=new Role();
    this.reset();
  
   
  }

 reset(){

 }
  ngOnInit() {
  }

}
