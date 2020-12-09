import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddambulanceComponent } from './addambulance.component';

describe('AddambulanceComponent', () => {
  let component: AddambulanceComponent;
  let fixture: ComponentFixture<AddambulanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddambulanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddambulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
