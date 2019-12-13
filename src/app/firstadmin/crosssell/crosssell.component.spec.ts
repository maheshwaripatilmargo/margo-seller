import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosssellComponent } from './crosssell.component';

describe('CrosssellComponent', () => {
  let component: CrosssellComponent;
  let fixture: ComponentFixture<CrosssellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosssellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosssellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
