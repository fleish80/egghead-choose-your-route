import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailLesson10Component } from './person-detail-lesson10.component';

describe('PersonDetailLesson10Component', () => {
  let component: PersonDetailLesson10Component;
  let fixture: ComponentFixture<PersonDetailLesson10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailLesson10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailLesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
