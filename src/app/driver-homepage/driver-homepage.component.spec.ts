import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverHomepageComponent } from './driver-homepage.component';

describe('DriverHomepageComponent', () => {
  let component: DriverHomepageComponent;
  let fixture: ComponentFixture<DriverHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
