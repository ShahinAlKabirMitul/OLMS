export class StudentRequestModel{
    public name:string;
    public phone:string;
    public orderBy:string;
    public isAscending:boolean;
 constructor(_name :string,_phone:string){
     this.name=_name;
     this.phone=_phone;
 }
}