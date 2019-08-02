import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowniesPage } from './brownies.page';

describe('BrowniesPage', () => {
  let component: BrowniesPage;
  let fixture: ComponentFixture<BrowniesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowniesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowniesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
