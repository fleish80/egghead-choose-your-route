import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListLesson14Component } from './person-list-lesson14.component';

describe('PersonListLesson14Component', () => {
  let component: PersonListLesson14Component;
  let fixture: ComponentFixture<PersonListLesson14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonListLesson14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListLesson14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
