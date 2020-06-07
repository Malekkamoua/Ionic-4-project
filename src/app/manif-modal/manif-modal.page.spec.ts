import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifModalPage } from './manif-modal.page';

describe('ManifModalPage', () => {
  let component: ManifModalPage;
  let fixture: ComponentFixture<ManifModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
