import { WrapperComponent } from './trang-chu/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component';
import { TitleMenuComponent } from './title-menu/title-menu.component';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material-module';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    KhoaHocComponent,
    TitleMenuComponent,
    WrapperComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ManagementsRoutingModule,
  ],
  exports:[MaterialModule],

  bootstrap: [AppComponent]
})
export class ManagementsModule { }
