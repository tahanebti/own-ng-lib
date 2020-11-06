import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorViewComponent } from './sector-view.component';

describe('SectorViewComponent', () => {
  let component: SectorViewComponent;
  let fixture: ComponentFixture<SectorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
