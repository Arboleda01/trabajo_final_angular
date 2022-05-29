import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1W2Component } from './s1-w2.component';

describe('S1W2Component', () => {
  let component: S1W2Component;
  let fixture: ComponentFixture<S1W2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1W2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S1W2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
