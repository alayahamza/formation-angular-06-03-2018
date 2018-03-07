import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './core/widgets/not-found/not-found.component';

const routes: Routes = [
  {path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  {path: '', redirectTo: 'catalog/list', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

