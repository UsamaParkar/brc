import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingcustomersPage } from './existingcustomers.page';

describe('ExistingcustomersPage', () => {
  let component: ExistingcustomersPage;
  let fixture: ComponentFixture<ExistingcustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingcustomersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingcustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
