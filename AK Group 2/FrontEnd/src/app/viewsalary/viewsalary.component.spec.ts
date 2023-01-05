import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalaryComponent } from './viewsalary.component';

describe('ViewsalaryComponent', () => {
  let component: ViewsalaryComponent;
  let fixture: ComponentFixture<ViewsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
