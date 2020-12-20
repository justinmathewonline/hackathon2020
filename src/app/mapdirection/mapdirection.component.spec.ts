import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdirectionComponent } from './mapdirection.component';

describe('MapdirectionComponent', () => {
  let component: MapdirectionComponent;
  let fixture: ComponentFixture<MapdirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
