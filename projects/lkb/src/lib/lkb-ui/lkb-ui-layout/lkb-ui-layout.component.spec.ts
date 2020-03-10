import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbUiLayoutComponent } from './lkb-ui-layout.component';

describe('LkbViewLayoutComponent', () => {
  let component: LkbUiLayoutComponent;
  let fixture: ComponentFixture<LkbUiLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbUiLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
