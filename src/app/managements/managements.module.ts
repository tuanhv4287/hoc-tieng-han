import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { TitleMenuComponent } from '../pages/trang-chu/title-menu/title-menu.component';
import { NavMenuComponent } from '../pages/trang-chu/nav-menu/nav-menu.component';
import { HomeComponent } from '../pages/trang-chu/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    TitleMenuComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ManagementsRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ]
})
export class ManagementsModule { }
