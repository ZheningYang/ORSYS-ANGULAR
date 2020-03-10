import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbComponent } from './lkb.component';

describe('LkbComponent', () => {
  let component: LkbComponent;
  let fixture: ComponentFixture<LkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
