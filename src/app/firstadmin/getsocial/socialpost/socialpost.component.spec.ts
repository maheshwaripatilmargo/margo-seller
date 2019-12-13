import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialpostComponent } from './socialpost.component';

describe('SocialpostComponent', () => {
  let component: SocialpostComponent;
  let fixture: ComponentFixture<SocialpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
