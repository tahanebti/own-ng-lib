import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProfileMenuComponent } from './navigation-profile-menu.component';

describe('NavigationProfileMenuComponent', () => {
  let component: NavigationProfileMenuComponent;
  let fixture: ComponentFixture<NavigationProfileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationProfileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
