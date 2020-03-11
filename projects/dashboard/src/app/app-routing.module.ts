import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/home/home.component';
import {CommentsComponent} from './features/comments/comments/comments.component';
import {AppGuard} from './core/app.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module').then(value => value.SearchModule)
  },
  {
    path: 'comments',
    component: CommentsComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'comments/:id',
    component: CommentsComponent,
    canActivate: [AppGuard],

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
