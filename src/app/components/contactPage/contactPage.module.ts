import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarModule } from '../sidebar/sidebar.module';
import { MainModule } from '../main/main.module';

import { ContactPageComponent } from './contactPage.component';

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [ContactPageComponent],
  exports: [ContactPageComponent]
})
export class ContactPageModule { }
