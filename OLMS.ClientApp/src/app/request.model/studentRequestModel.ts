import { BaseRequestModel } from './base.request';
export class StudentRequestModel extends BaseRequestModel{
    public name:string;
    public phone:string;
   
 constructor(_name :string,_phone:string){
     super();
     this.name=_name;
     this.phone=_phone;
   
 }
}