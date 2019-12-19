import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsocialComponent } from './getsocial.component';

describe('GetsocialComponent', () => {
  let component: GetsocialComponent;
  let fixture: ComponentFixture<GetsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
