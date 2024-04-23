import { WrapperComponent } from './trang-chu/wrapper.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component';
import { TitleMenuComponent } from './title-menu/title-menu.component';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material-module';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { KhoaHocDangChonComponent } from './khoa-hoc/khoa-hoc-dang-chon/khoa-hoc-dang-chon.component';
import { register } from 'swiper/element/bundle';
import { TextBookComponent } from './text-book/text-book.component';
import { FormLoginAndRegisterComponent } from './header/form-login-and-register/form-login-and-register.component';
import { HousingService } from './services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

register();

@NgModule({
  declarations: [
    AppComponent,
    KhoaHocComponent,
    TitleMenuComponent,
    WrapperComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    KhoaHocDangChonComponent,
    TextBookComponent,
    FormLoginAndRegisterComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ManagementsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HousingService],
  exports: [MaterialModule],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManagementsModule {}
