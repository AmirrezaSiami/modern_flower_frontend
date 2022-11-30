import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogInComponent} from "./user/log-in/log-in.component";

const routes: Routes = [
  {
    title: "Login",
    path: "",
    component: LogInComponent,
  },
  {
    title: "Login",
    path: "login",
    component: LogInComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
