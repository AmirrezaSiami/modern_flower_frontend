import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/modules/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogInComponent} from "./user/log-in/log-in.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiHttpInterceptor} from "./shared/interceptor/ApiHttpInterceptor";
import {TranslocoRootModule} from './transloco-root.module';
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  exports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true},
    {provide: TRANSLOCO_SCOPE, useValue: 'errors'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
