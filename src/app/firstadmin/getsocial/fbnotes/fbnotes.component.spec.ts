import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbnotesComponent } from './fbnotes.component';

describe('FbnotesComponent', () => {
  let component: FbnotesComponent;
  let fixture: ComponentFixture<FbnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
