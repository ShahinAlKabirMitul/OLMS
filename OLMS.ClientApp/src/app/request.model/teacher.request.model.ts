import { BaseRequestModel } from './base.request';
export class TeacherRequestModel extends BaseRequestModel {
  name:String;
  phone:String;
  constructor(_name :string,_phone:string){
    super();
    this.name=_name;
    this.phone=_phone;
  
}

}

  
