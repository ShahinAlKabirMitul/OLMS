import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEntryComponent } from './content-entry.component';

describe('ContentEntryComponent', () => {
  let component: ContentEntryComponent;
  let fixture: ComponentFixture<ContentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
