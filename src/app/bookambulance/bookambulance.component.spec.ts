import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookambulanceComponent } from './bookambulance.component';

describe('BookambulanceComponent', () => {
  let component: BookambulanceComponent;
  let fixture: ComponentFixture<BookambulanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookambulanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookambulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
