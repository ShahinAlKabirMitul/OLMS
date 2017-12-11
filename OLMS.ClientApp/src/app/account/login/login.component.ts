import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { RegistrationService } from '../../service/registration.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;
  constructor(private slService:RegistrationService,
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new User();
  }
// login(){
//  console.log('login click');
//  this.slService.login(this.model).subscribe(s=>{
//   console.log(s);
//  })
// }
login() {
  
  let userName = this.model.email;
  let password = this.model.password;
  console.log('model'+this.model);
  var result = this.userService.login(userName, password).subscribe(
    response => {
        console.log('login response',response);
        if (this.userService.redirectUrl) {
            this.router.navigateByUrl(this.userService.redirectUrl);
        } else {
           let landingRoute=response.landingRoute;
            this.router.navigate([landingRoute]);
        }
    },
    error => {
      console.log('error', error);
        var results = error['_body'];
        alert(error.statusText );
    });

}

}
