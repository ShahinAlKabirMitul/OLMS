import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEntryComponent } from './class-entry.component';

describe('ClassEntryComponent', () => {
  let component: ClassEntryComponent;
  let fixture: ComponentFixture<ClassEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
