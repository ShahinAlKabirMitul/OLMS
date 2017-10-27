import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEntryComponent } from './teacher-entry.component';

describe('TeacherEntryComponent', () => {
  let component: TeacherEntryComponent;
  let fixture: ComponentFixture<TeacherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
