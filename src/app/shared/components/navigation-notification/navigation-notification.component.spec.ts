import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationNotificationComponent } from './navigation-notification.component';

describe('NavigationNotificationComponent', () => {
  let component: NavigationNotificationComponent;
  let fixture: ComponentFixture<NavigationNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
