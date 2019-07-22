import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakesPage } from './cupcakes.page';

describe('CupcakesPage', () => {
  let component: CupcakesPage;
  let fixture: ComponentFixture<CupcakesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupcakesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupcakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
