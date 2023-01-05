import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewattendanceComponent } from './viewattendance.component';

describe('ViewattendanceComponent', () => {
  let component: ViewattendanceComponent;
  let fixture: ComponentFixture<ViewattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewattendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
