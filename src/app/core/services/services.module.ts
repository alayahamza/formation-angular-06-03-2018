import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './catalog.service';
import {HttpClientModule} from '@angular/common/http';
import { UrlService } from './url.service';
import { CartService } from './cart.service';
import { ActionService } from './action.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    CatalogService,
    UrlService,
    CartService,
    ActionService,
  ]
})
export class ServicesModule { }
