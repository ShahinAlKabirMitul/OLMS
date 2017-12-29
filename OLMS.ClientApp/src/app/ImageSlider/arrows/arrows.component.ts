import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'carousel-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {
  private DISABLE_ELEMENT_TIME = 750;
  public disableElement: boolean;
  @Output() changeSlide: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 public onChangeSlide(direction: string): void {
    this.changeSlide.emit(direction);
  }

  public disableNavButtons(): void {
    this.disableElement = true;
    setTimeout(() => this.disableElement = false, this.DISABLE_ELEMENT_TIME);
  }
}
