import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'carousel-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {
  private DISABLE_ELEMENT_TIME = 750;
  private disableElement: boolean;

  @Input() images: string[];
  @Input() currentSlide: number;

  @Output() changeSlide: EventEmitter<number> = new EventEmitter();
  
  constructor() { }
  public onChangeSlide(slideIndex): void {
    this.changeSlide.emit(slideIndex);
  }

  public disableNavButtons(): void {
    this.disableElement = true;
    setTimeout(() => this.disableElement = false, this.DISABLE_ELEMENT_TIME);
  }

  ngOnInit() {
  }

}
