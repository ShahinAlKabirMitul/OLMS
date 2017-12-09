import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model:User;
  constructor(private regService:RegistrationService) { }

  ngOnInit() {
    this.model=new User();
  }
  async save(){
    console.log(this.model);
    await this.regService.reister(this.model).toPromise().then(s=>{
     
     alert(s.statusText);

    }).catch(s=>{
      alert( s );
    });
  }
  reset(){
    this.model=new User();
  }
}
