import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalaryComponent } from './addsalary.component';

describe('AddsalaryComponent', () => {
  let component: AddsalaryComponent;
  let fixture: ComponentFixture<AddsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
