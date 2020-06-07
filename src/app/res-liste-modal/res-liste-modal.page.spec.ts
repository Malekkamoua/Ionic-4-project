import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResListeModalPage } from './res-liste-modal.page';

describe('ResListeModalPage', () => {
  let component: ResListeModalPage;
  let fixture: ComponentFixture<ResListeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResListeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResListeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
