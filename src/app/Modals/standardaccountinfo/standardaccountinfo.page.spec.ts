import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardaccountinfoPage } from './standardaccountinfo.page';

describe('StandardaccountinfoPage', () => {
  let component: StandardaccountinfoPage;
  let fixture: ComponentFixture<StandardaccountinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardaccountinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardaccountinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
