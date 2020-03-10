import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbUiHeaderComponent } from './lkb-ui-header.component';

describe('LkbViewHeaderComponent', () => {
  let component: LkbUiHeaderComponent;
  let fixture: ComponentFixture<LkbUiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbUiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
