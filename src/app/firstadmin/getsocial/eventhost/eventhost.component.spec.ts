import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventhostComponent } from './eventhost.component';

describe('EventhostComponent', () => {
  let component: EventhostComponent;
  let fixture: ComponentFixture<EventhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
