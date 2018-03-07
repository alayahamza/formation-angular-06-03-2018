import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartRootComponent } from './cart-root/cart-root.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartOrderComponent } from './cart-order/cart-order.component';
import { CartReactiveComponent } from './cart-reactive/cart-reactive.component';
import {FormsModule} from '@angular/forms';
import {ServicesModule} from '../core/services/services.module';
import {WidgetsModule} from '../core/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WidgetsModule,
    CartRoutingModule
  ],
  declarations: [CartRootComponent, CartContentComponent, CartOrderComponent, CartReactiveComponent]
})
export class CartModule { }
