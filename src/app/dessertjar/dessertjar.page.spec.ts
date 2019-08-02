import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertjarPage } from './dessertjar.page';

describe('DessertjarPage', () => {
  let component: DessertjarPage;
  let fixture: ComponentFixture<DessertjarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertjarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertjarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
