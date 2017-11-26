import { Entity } from "./entity";

export class Course extends Entity {
    public title:string;
    public price:number;
    public tags:string;
    public totalStudentsEnrolled:number;
    public PublishDate:Date;
    public totalLecturesCount:number;
    public subTitle:string;
    public courseSummary:string;
    public courseShortDescription:string;
    public language:string;
    public achieve:string;
    public requirements:string;
    public fullDescription:string;
    public teacherId:string;
}