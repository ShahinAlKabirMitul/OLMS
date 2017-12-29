import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() public src: string;
  @Input() public slideNo: number;
  @Input() public isHidden: boolean;
  constructor() { }

  ngOnInit() {
  }

}
