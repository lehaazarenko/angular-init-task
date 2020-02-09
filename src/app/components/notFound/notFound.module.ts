import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarModule } from '../sidebar/sidebar.module';
import { MainModule } from '../main/main.module';

import { NotFoundComponent } from './notFound.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
