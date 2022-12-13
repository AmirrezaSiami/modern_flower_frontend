import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './user/page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import {ApiResponseHttpInterceptor} from "./shared/interceptor/ApiResponseHttpInterceptor";
import {ApiHttpInterceptor} from "./shared/interceptor/api-http-interceptor.interceptor";
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";
import {NgxSpinnerModule} from "ngx-spinner";
import {SharedModule} from "./shared/modules/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    SharedModule,
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiResponseHttpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true},
    {provide: TRANSLOCO_SCOPE, useValue: 'errors'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
