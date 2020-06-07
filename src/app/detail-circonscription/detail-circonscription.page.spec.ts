import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCirconscriptionPage } from './detail-circonscription.page';

describe('DetailCirconscriptionPage', () => {
  let component: DetailCirconscriptionPage;
  let fixture: ComponentFixture<DetailCirconscriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCirconscriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCirconscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
