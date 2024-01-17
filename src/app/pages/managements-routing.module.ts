import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './trang-chu/wrapper.component';
import { KhoaHocDangChonComponent } from './khoa-hoc/khoa-hoc-dang-chon/khoa-hoc-dang-chon.component';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component';
import { TextBookComponent } from './text-book/text-book.component';

const routes: Routes = [
  {
    path:'', component: WrapperComponent, pathMatch: 'full'
  },
  { path:'khoa-hoc', component: KhoaHocDangChonComponent },
  { path:'home', component: WrapperComponent },
  { path:'list-khoa-hoc', component: KhoaHocComponent },
  { path:'text-book', component: TextBookComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
