import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CatalogModule} from './catalog/catalog.module';
import {ServicesModule} from './core/services/services.module';
import {AppRoutingModule} from './app-routing.module';
import {WidgetsModule} from './core/widgets/widgets.module';
import {CartModule} from './cart/cart.module';
import {Book} from './core/model/book';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
    CatalogModule,
    ServicesModule,
    BrowserAnimationsModule,
    // Routing module à la fin :
    AppRoutingModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}

