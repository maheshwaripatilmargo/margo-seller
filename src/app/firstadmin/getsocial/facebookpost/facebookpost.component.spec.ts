import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookpostComponent } from './facebookpost.component';

describe('FacebookpostComponent', () => {
  let component: FacebookpostComponent;
  let fixture: ComponentFixture<FacebookpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
