import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProductAddComponent} from "./components/product-add/product-add.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'dash', component: DashboardComponent, canActivate: [AuthGuard], children: [
      {path: '', component: ProductListComponent, pathMatch: 'full'},
      {path: 'product-add', component: ProductAddComponent, pathMatch: 'full'},
      {path: 'product-list', component: ProductListComponent},
      {path: ':id', component: ProductDetailComponent},
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
