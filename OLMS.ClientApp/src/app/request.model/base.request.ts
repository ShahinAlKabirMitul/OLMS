export class BaseRequestModel{
   page:number;
   orderBy:string;
   perPageCount:number;
   isAscending :boolean;

   constructor( ){
   this.page=1;
   this.perPageCount=5;
    
}
}