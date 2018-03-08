import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { TextRatingPipe } from './text-rating.pipe';
import { RatingComponent } from './rating/rating.component';
import { BookNavigatorComponent } from './book-navigator/book-navigator.component';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { OrderButtonComponent } from './order-button/order-button.component';
import { ErrorComponent } from './error/error.component';
import { FieldComponent } from './field/field.component';
import { ZipcodeValidatorDirective } from './zipcode-validator.directive';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NotFoundComponent,
    LoadingComponent,
    MenuComponent,
    TextRatingPipe,
    RatingComponent,
    BookNavigatorComponent,
    SmallCartComponent,
    BuyButtonComponent,
    OrderButtonComponent,
    ErrorComponent,
    FieldComponent,
    ZipcodeValidatorDirective,
    EmailValidatorDirective
  ],
  exports: [
    LoadingComponent,
    MenuComponent,
    TextRatingPipe,
    RatingComponent,
    BookNavigatorComponent,
    SmallCartComponent,
    BuyButtonComponent,
    OrderButtonComponent,
    ErrorComponent,
    FieldComponent,
    ZipcodeValidatorDirective,
    EmailValidatorDirective
  ]
})
export class WidgetsModule { }
