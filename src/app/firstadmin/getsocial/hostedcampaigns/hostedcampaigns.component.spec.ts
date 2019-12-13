import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostedcampaignsComponent } from './hostedcampaigns.component';

describe('HostedcampaignsComponent', () => {
  let component: HostedcampaignsComponent;
  let fixture: ComponentFixture<HostedcampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostedcampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostedcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
