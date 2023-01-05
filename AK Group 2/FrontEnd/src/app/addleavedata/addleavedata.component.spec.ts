import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleavedataComponent } from './addleavedata.component';

describe('AddleavedataComponent', () => {
  let component: AddleavedataComponent;
  let fixture: ComponentFixture<AddleavedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddleavedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddleavedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
