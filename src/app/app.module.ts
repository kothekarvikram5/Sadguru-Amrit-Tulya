import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemUploadComponent } from './item-upload/item-upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemAddComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemUploadComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
   //providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
