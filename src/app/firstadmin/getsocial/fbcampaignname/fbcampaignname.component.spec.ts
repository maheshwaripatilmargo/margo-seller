import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcampaignnameComponent } from './fbcampaignname.component';

describe('FbcampaignnameComponent', () => {
  let component: FbcampaignnameComponent;
  let fixture: ComponentFixture<FbcampaignnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbcampaignnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbcampaignnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
