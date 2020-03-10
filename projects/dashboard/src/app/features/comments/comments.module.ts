import {NgModule} from '@angular/core';
import {CommentsComponent} from './comments/comments.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    SharedModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule {
}
