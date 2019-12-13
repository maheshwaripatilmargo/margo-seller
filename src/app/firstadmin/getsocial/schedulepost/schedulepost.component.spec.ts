import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulepostComponent } from './schedulepost.component';

describe('SchedulepostComponent', () => {
  let component: SchedulepostComponent;
  let fixture: ComponentFixture<SchedulepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
