import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktofbComponent } from './linktofb.component';

describe('LinktofbComponent', () => {
  let component: LinktofbComponent;
  let fixture: ComponentFixture<LinktofbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktofbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktofbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
