import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbheadupComponent } from './fbheadup.component';

describe('FbheadupComponent', () => {
  let component: FbheadupComponent;
  let fixture: ComponentFixture<FbheadupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbheadupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbheadupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
