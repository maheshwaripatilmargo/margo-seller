import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsnipetaddsnipetComponent } from './msgsnipetaddsnipet.component';

describe('MsgsnipetaddsnipetComponent', () => {
  let component: MsgsnipetaddsnipetComponent;
  let fixture: ComponentFixture<MsgsnipetaddsnipetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgsnipetaddsnipetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgsnipetaddsnipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
