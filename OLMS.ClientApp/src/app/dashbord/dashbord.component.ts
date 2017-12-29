import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/Course';
import { Observable } from 'rxjs/Observable';
import { BaseRequestModel } from '../request.model/base.request';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  localTime;
  keyword: string;
  requestModel: BaseRequestModel;
  public courses: Observable<Course[]>;

  public imageSources: string[] = [
    'http://www.violinshoptampa.com/assets/images/Panorama2a.jpg',
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg',
  ];

  // example config
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
  
  constructor(private courseService:CourseService) {
    this.localTime = new Date();
    this. requestModel = new BaseRequestModel();
    this. requestModel.page = -1;
    this. requestModel.keyword = this.keyword;
    this.requestModel.orderBy = 'Modified';

   }

  ngOnInit() {
    this.search();
    console.log(this.courses);
  }
  

  async search() {
    console.log('Search'+this.requestModel.keyword);
    //let t=new BaseRequestModel();
   
   this.courses= await this.courseService.search(this.requestModel);
 
   console.log('course list',this.courses);
  
  }

  
  mytiply(a:number,b:number):number{
    return a*b;
  }
}
