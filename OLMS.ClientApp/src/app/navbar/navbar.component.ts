import { IProfile } from '../model/user';

import { Router } from '@angular/router';
import { UserProfile } from '../model/userProfile';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loading: boolean = true;
  Profile: IProfile;
  
  constructor(public authService: UserService,
    public authProfile: UserProfile,
    public router: Router) {
}

  ngOnInit() {
    this.Profile = this.authProfile.getProfile();
    //this.authService.isAuthenticated();
  }
  logOut(){
   
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
