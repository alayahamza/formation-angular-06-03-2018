import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoadingComponent} from './loading/loading.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { TextRatingPipe } from './text-rating.pipe';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [NotFoundComponent, LoadingComponent, MenuComponent, TextRatingPipe, RatingComponent],
  exports: [LoadingComponent, MenuComponent, TextRatingPipe, RatingComponent]
})
export class WidgetsModule {
}
