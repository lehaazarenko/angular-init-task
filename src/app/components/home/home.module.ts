import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarModule } from '../sidebar/sidebar.module';
import { MainModule } from '../main/main.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
