import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './product/products.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path:'product',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
