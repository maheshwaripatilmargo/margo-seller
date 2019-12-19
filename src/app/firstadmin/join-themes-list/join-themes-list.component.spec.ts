import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinThemesListComponent } from './join-themes-list.component';

describe('JoinThemesListComponent', () => {
  let component: JoinThemesListComponent;
  let fixture: ComponentFixture<JoinThemesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinThemesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinThemesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
