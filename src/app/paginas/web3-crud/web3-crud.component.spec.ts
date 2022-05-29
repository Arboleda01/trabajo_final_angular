import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3CrudComponent } from './web3-crud.component';

describe('Web3CrudComponent', () => {
  let component: Web3CrudComponent;
  let fixture: ComponentFixture<Web3CrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Web3CrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Web3CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
