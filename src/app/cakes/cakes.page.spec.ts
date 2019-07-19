import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesPage } from './cakes.page';

describe('CakesPage', () => {
  let component: CakesPage;
  let fixture: ComponentFixture<CakesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
