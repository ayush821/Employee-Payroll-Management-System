import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRetrieveComponent } from './employee-retrieve.component';

describe('EmployeeRetrieveComponent', () => {
  let component: EmployeeRetrieveComponent;
  let fixture: ComponentFixture<EmployeeRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRetrieveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
