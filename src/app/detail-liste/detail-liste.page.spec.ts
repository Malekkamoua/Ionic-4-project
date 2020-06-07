import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListePage } from './detail-liste.page';

describe('DetailListePage', () => {
  let component: DetailListePage;
  let fixture: ComponentFixture<DetailListePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
