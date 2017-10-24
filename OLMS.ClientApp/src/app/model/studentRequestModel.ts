export class StudentRequestModel{
    public name:string;
    public phone:string;
    public orderBy:string;
    public isAscending:boolean;
    public Page:number
    public PerPageCount:number
 constructor(_name :string,_phone:string){
     this.name=_name;
     this.phone=_phone;
     this.Page=1;
     this.PerPageCount=2;
 }
}