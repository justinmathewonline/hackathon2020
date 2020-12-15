import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedtripsComponent } from './completedtrips.component';

describe('CompletedtripsComponent', () => {
  let component: CompletedtripsComponent;
  let fixture: ComponentFixture<CompletedtripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedtripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedtripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
