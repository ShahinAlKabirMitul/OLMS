import { UserProfile } from '../../model/userProfile';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../model/role';
import { BaseController } from '../../common/controller/baseController';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../service/role.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent extends BaseController<Role> implements OnInit,OnDestroy {

  constructor(public service:RoleService,private router:Router,private route:ActivatedRoute,public authProfile:UserProfile) { 
    super(service,authProfile);
  }

 
 reset(){
  this.model=new Role();
 }
 
  ngOnInit() {
    this.reset();
  }
  ngOnDestroy(){
    this.reset();
  }
}
