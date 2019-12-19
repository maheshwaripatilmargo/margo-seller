import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinConfirmComponent } from './join-confirm.component';

describe('JoinConfirmComponent', () => {
  let component: JoinConfirmComponent;
  let fixture: ComponentFixture<JoinConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
