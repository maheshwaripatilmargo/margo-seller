import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforhostComponent } from './searchforhost.component';

describe('SearchforhostComponent', () => {
  let component: SearchforhostComponent;
  let fixture: ComponentFixture<SearchforhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchforhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchforhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
