import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostConfirmComponent } from './host-confirm.component';

describe('HostConfirmComponent', () => {
  let component: HostConfirmComponent;
  let fixture: ComponentFixture<HostConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
