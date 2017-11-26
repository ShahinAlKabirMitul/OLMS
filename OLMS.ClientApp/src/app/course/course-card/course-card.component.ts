import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../model/Course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input('course') 'course':Course
  constructor(private service:CourseService) 
  { 
    
  }

  ngOnInit() {
  }

}
