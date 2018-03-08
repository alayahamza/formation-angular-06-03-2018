import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartRootComponent} from './cart-root/cart-root.component';
import {CartContentComponent} from './cart-content/cart-content.component';
import {CartOrderComponent} from './cart-order/cart-order.component';
import {CartReactiveComponent} from './cart-reactive/cart-reactive.component';
import {GuardService} from '../guard.service';

const routes: Routes = [
  {
    path: '',
    component: CartRootComponent,
    children: [
      {path: 'content', component: CartContentComponent},
      {
        path: 'order', component: CartOrderComponent,
        canActivate: [GuardService]
      },
      {
        path: 'reactive', component: CartReactiveComponent,
        canActivate: [GuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
