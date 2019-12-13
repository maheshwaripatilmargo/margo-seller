import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsnipetComponent } from './msgsnipet.component';

describe('MsgsnipetComponent', () => {
  let component: MsgsnipetComponent;
  let fixture: ComponentFixture<MsgsnipetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgsnipetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgsnipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
