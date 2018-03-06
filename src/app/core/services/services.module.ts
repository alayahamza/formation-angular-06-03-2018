import {NgModule} from '@angular/core';
import {CatalogService} from './catalog.service';
import {HttpClientModule} from '@angular/common/http';
import { UrlService } from './url.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [CatalogService, UrlService]
})
export class ServicesModule { }
