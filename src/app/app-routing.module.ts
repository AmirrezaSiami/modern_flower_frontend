import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./user/page-not-found/page-not-found.component";
import {LoginComponent} from "./user/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "404",
    component: PageNotFoundComponent,
  }, {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
