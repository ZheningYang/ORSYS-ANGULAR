import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbUiCardComponent } from './lkb-ui-card.component';

describe('LkbViewCardComponent', () => {
  let component: LkbUiCardComponent;
  let fixture: ComponentFixture<LkbUiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbUiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbUiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
