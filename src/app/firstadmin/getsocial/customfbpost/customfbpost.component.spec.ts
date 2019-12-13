import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfbpostComponent } from './customfbpost.component';

describe('CustomfbpostComponent', () => {
  let component: CustomfbpostComponent;
  let fixture: ComponentFixture<CustomfbpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomfbpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfbpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
