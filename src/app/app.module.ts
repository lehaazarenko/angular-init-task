import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { MainModule } from './components/main/main.module';
import { ContactPageModule } from './components/contactPage/contactPage.module';
import { HomeModule } from './components/home/home.module';
import { NotFoundModule } from './components/notFound/notFound.module';

import { ContactPageComponent } from './components/contactPage/contactPage.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

const AppRoutes = [
  { path: 'contact', component: ContactPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    MainModule,
    ContactPageModule,
    HomeModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
