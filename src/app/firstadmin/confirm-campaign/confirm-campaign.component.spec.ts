import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCampaignComponent } from './confirm-campaign.component';

describe('ConfirmCampaignComponent', () => {
  let component: ConfirmCampaignComponent;
  let fixture: ComponentFixture<ConfirmCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
