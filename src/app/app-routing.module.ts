import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapsComponent } from './maps/maps.component';
import { ChartsComponent } from './charts/charts.component';
import { SystemComponent } from './system/system.component';
import { PagesComponent } from './pages/pages.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'maps',component:MapsComponent},
  {path:'charts',component:ChartsComponent},
  {path:'system',component:SystemComponent},
  {path:'pages',component:PagesComponent},
  {path:'ecommerce',component:EcommerceComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
