import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbUiButtonComponent } from './lkb-ui-button.component';

describe('LkbUiButtonComponent', () => {
  let component: LkbUiButtonComponent;
  let fixture: ComponentFixture<LkbUiButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbUiButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
