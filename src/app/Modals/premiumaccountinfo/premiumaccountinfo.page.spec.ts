import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumaccountinfoPage } from './premiumaccountinfo.page';

describe('PremiumaccountinfoPage', () => {
  let component: PremiumaccountinfoPage;
  let fixture: ComponentFixture<PremiumaccountinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumaccountinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumaccountinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
