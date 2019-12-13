import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupfbComponent } from './setupfb.component';

describe('SetupfbComponent', () => {
  let component: SetupfbComponent;
  let fixture: ComponentFixture<SetupfbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupfbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
