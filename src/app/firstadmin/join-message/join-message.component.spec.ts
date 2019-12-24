import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMessageComponent } from './join-message.component';

describe('JoinMessageComponent', () => {
  let component: JoinMessageComponent;
  let fixture: ComponentFixture<JoinMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
