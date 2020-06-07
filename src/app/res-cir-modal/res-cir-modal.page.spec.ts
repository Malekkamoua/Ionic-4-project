import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCirModalPage } from './res-cir-modal.page';

describe('ResCirModalPage', () => {
  let component: ResCirModalPage;
  let fixture: ComponentFixture<ResCirModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResCirModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCirModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
