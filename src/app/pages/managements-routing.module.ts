import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component';

const routes: Routes = [
  {
    path:'', component: WrapperComponent, pathMatch: 'full'
  },
  { path:'khoa-hoc', component: KhoaHocComponent },
  { path:'home', component: WrapperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
