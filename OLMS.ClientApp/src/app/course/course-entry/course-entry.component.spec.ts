import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEntryComponent } from './course-entry.component';

describe('CourseEntryComponent', () => {
  let component: CourseEntryComponent;
  let fixture: ComponentFixture<CourseEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
