import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailLesson7Component } from './person-detail-lesson7.component';

describe('PersonDetailLesson7Component', () => {
  let component: PersonDetailLesson7Component;
  let fixture: ComponentFixture<PersonDetailLesson7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailLesson7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailLesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
