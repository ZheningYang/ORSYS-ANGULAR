import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbUiContextComponent } from './lkb-ui-context.component';

describe('LkbUiContextComponent', () => {
  let component: LkbUiContextComponent;
  let fixture: ComponentFixture<LkbUiContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbUiContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbUiContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
