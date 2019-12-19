import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostThemesListComponent } from './host-themes-list.component';

describe('HostThemesListComponent', () => {
  let component: HostThemesListComponent;
  let fixture: ComponentFixture<HostThemesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostThemesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostThemesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
