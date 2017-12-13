import { BadInout } from '../../common/error/bad-input';
import { NotAuthorized } from '../../common/error/notauthorized';
import { NotFoundError } from '../../common/error/NotFoundError';
import { AppError } from '../../common/error/app-error';
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
    await this.regService.reister(this.model).toPromise().then( (s:Response) =>{
     
      if(s.status==200)
      alert('Registration Succssfully');

    }).catch( (error: AppError)=>{
      if (error instanceof NotFoundError) {
          alert('Data Not Found');
      }
      else if(error instanceof NotAuthorized){
          alert('You are not authozid for this action');
      }
      else if(error instanceof BadInout){
          alert('Bad Input');
      }
      else{
          alert('Something wrong');
      }
     

  } );

  }
  reset(){
    this.model=new User();
  }
}
