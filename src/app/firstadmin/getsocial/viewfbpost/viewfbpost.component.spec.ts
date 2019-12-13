import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfbpostComponent } from './viewfbpost.component';

describe('ViewfbpostComponent', () => {
  let component: ViewfbpostComponent;
  let fixture: ComponentFixture<ViewfbpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfbpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfbpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
