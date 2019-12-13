import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpostComponent } from './selectpost.component';

describe('SelectpostComponent', () => {
  let component: SelectpostComponent;
  let fixture: ComponentFixture<SelectpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
