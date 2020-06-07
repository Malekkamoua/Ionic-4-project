import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Liste1Page } from './liste1.page';

describe('Liste1Page', () => {
  let component: Liste1Page;
  let fixture: ComponentFixture<Liste1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Liste1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Liste1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
