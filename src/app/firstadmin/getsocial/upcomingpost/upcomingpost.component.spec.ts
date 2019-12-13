import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingpostComponent } from './upcomingpost.component';

describe('UpcomingpostComponent', () => {
  let component: UpcomingpostComponent;
  let fixture: ComponentFixture<UpcomingpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
