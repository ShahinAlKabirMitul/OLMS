import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(private service:CourseService) 
  { 
    
  }

  ngOnInit() {
  }

}
