import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresModalPage } from './membres-modal.page';

describe('MembresModalPage', () => {
  let component: MembresModalPage;
  let fixture: ComponentFixture<MembresModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
