import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailLesson14Component } from './person-detail-lesson14.component';

describe('PersonDetailLesson14Component', () => {
  let component: PersonDetailLesson14Component;
  let fixture: ComponentFixture<PersonDetailLesson14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailLesson14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailLesson14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
