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
  constructor(private slService:RegistrationService) { }

  ngOnInit() {
    this.model = new User();
  }
login(){
 console.log('login click');
 this.slService.login(this.model).subscribe(s=>{
  console.log(s);
 })
}
}
