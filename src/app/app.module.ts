import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ManagementsModule } from './managements/managements.module';
import { KhoaHocComponent } from './pages/khoa-hoc/khoa-hoc.component';

@NgModule({
  declarations: [
    AppComponent,
    KhoaHocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ManagementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
