import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [SearchComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {
}
