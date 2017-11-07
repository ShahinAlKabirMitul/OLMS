export class BaseRequestModel{
   page:number;
   orderBy:string;
   perPageCount:number;
   isAscending :boolean;
   keyword:string;
   constructor( ){
   this.page=1;
   this.perPageCount=5;
    
    
}
}