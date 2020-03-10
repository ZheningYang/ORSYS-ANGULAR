import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LkbViewHomeComponent } from './lkb-view-home/lkb-view-home.component';
import { LkbViewTileComponent } from './lkb-view-tile/lkb-view-tile.component';
import { LkbViewListComponent } from './lkb-view-list/lkb-view-list.component';
import {LkbUiModule} from '../lkb-ui/lkb-ui.module';



@NgModule({
  declarations: [LkbViewHomeComponent, LkbViewTileComponent, LkbViewListComponent],
  imports: [
    CommonModule,
    LkbUiModule
  ],
  exports: [LkbViewHomeComponent, LkbViewTileComponent, LkbViewListComponent]
})
export class LkbViewsModule { }
