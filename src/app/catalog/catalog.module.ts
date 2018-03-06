import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRootComponent } from './catalog-root/catalog-root.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import {CatalogRoutingModule} from './catalog-routing-module';
import {WidgetsModule} from '../core/widgets/widgets.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule,
    // Routing module à la fin
    CatalogRoutingModule
  ],
  declarations: [CatalogRootComponent, CatalogListComponent, CatalogBookComponent],
  exports: []
})
export class CatalogModule { }
