import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectLandingComponent } from './prospect-landing.component';

describe('ProspectLandingComponent', () => {
  let component: ProspectLandingComponent;
  let fixture: ComponentFixture<ProspectLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
