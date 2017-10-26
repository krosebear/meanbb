import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSurveyComponent } from './vote-survey.component';

describe('VoteSurveyComponent', () => {
  let component: VoteSurveyComponent;
  let fixture: ComponentFixture<VoteSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
