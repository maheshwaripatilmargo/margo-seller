import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMessageComponent } from './host-message.component';

describe('HostMessageComponent', () => {
  let component: HostMessageComponent;
  let fixture: ComponentFixture<HostMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
