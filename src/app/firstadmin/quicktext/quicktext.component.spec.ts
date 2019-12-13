import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicktextComponent } from './quicktext.component';

describe('QuicktextComponent', () => {
  let component: QuicktextComponent;
  let fixture: ComponentFixture<QuicktextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicktextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicktextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
