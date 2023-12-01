import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const ManagementsRoutes: Routes = [
  // { path: 'thong-tin-co-so', component: ThongTinCoSoComponent },
  // {
  //    path: 'test-plan', canActivate: [AuthGuard], component: TestPlanComponent, children: [
  //        { path: 'test-plan-detail', component: TestPlanDetailComponent },
  //    ]
  // },
  // { path: 'test-item-detail/:id', component: TestItemDetailComponent },
  // { path: 'execute-detail/:id', component: ExecuteDetailComponent },
  // { path: 'user-list', canActivate: [AuthGuard], component: UserListComponent, data: { roles: 'ngo.tai', path: 'user-list' } },

  { path: '',pathMatch: 'full' },
  // { path: '', redirectTo: '/ho-so-suc-khoe', pathMatch: 'full'},

  // { path: 'ho-so-suc-khoe', component: HoSOSucKhoeComponent },
  // { path: 'ho-so-benh-an', component: HoSoBenhAnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ManagementsRoutes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
