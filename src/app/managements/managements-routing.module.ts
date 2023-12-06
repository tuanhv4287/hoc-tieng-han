import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/trang-chu/home.component';

export const ManagementsRoutes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'trangchu', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(ManagementsRoutes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
