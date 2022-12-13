import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // Toaster Module added
    TranslocoModule,
  ],
  exports: [
    CommonModule,
    TranslocoModule,
  ],
  declarations: [],
})
export class SharedModule {
}
