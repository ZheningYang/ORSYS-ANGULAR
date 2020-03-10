import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbViewHomeComponent } from './lkb-view-home.component';

describe('LkbViewHomeComponent', () => {
  let component: LkbViewHomeComponent;
  let fixture: ComponentFixture<LkbViewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbViewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
