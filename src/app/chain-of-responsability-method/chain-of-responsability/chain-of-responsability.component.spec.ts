import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainOfResponsabilityComponent } from './chain-of-responsability.component';

describe('ChainOfResponsabilityComponent', () => {
  let component: ChainOfResponsabilityComponent;
  let fixture: ComponentFixture<ChainOfResponsabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainOfResponsabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainOfResponsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
