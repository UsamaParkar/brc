import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpagePage } from './accountpage.page';

describe('AccountpagePage', () => {
  let component: AccountpagePage;
  let fixture: ComponentFixture<AccountpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
