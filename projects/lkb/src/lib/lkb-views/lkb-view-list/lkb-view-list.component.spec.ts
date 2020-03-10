import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbViewListComponent } from './lkb-view-list.component';

describe('LkbViewListComponent', () => {
  let component: LkbViewListComponent;
  let fixture: ComponentFixture<LkbViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
