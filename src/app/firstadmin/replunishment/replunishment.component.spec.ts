import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplunishmentComponent } from './replunishment.component';

describe('ReplunishmentComponent', () => {
  let component: ReplunishmentComponent;
  let fixture: ComponentFixture<ReplunishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplunishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplunishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
