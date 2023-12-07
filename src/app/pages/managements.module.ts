import { WrapperComponent } from './wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component';
import { TitleMenuComponent } from './title-menu/title-menu.component';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material-module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    KhoaHocComponent,
    TitleMenuComponent,
    WrapperComponent,
    HeaderComponent
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
