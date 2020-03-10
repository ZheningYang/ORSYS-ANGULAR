import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkbViewTileComponent } from './lkb-view-tile.component';

describe('LkbViewTileComponent', () => {
  let component: LkbViewTileComponent;
  let fixture: ComponentFixture<LkbViewTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkbViewTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkbViewTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
