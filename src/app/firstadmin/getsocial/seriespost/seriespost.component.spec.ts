import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriespostComponent } from './seriespost.component';

describe('SeriespostComponent', () => {
  let component: SeriespostComponent;
  let fixture: ComponentFixture<SeriespostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriespostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriespostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
