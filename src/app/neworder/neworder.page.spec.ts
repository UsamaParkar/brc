import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworderPage } from './neworder.page';

describe('NeworderPage', () => {
  let component: NeworderPage;
  let fixture: ComponentFixture<NeworderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeworderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeworderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
