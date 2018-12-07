import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailLesson8Component } from './person-detail-lesson8.component';

describe('PersonDetailLesson8Component', () => {
  let component: PersonDetailLesson8Component;
  let fixture: ComponentFixture<PersonDetailLesson8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailLesson8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailLesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
